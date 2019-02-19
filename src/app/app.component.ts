import { Component } from '@angular/core';

import * as jsPdf from 'jspdf';
import { noComponentFactoryError } from '@angular/core/src/linker/component_factory_resolver';
import { stringify } from '@angular/core/src/render3/util';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  
  getCollegeAddress(address) {
      address = address.split(', ').join(',').split(',');
      return (address.slice(Math.max(address.length - 5, 1)));
  }
  csv(x) {
      x = x.toString();
      let lastThree = x.substring(x.length - 3);
      const otherNumbers = x.substring(0, x.length - 3);
      if (otherNumbers !== '')
      {
        lastThree = ',' + lastThree;
      }
      const res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
      return (res + '/-') ;
  }
  splitCollegeAddress(address) {
      let full = [];

      const regex = /(.{1,45})(.{1,90})(.{1,90})(.*)/gmis;

      const match = regex.exec(address);

      full.push(match[1]);
      full.push(match[2]);
      full.push(match[3]);

      return full;
  }
  splitBankAddress(address){
    let full = [];

    const regex = /(.{1,58})(.{1,90})(.{1,90})(.*)/gmis;

    const match = regex.exec(address);

    full.push(match[1]);
    full.push(match[2]);
    full.push(match[3]);
    

    return full;
  }


form1(clg_name, clgAddr, voucher_no, current_date, received_date, bank_details,
  letterNumber, letterDate, receiptNumber, receiptDate) {

  const bankdraftOrCheckno = voucher_no;
  const bankdate = received_date;
  const bankdetails = bank_details;
  const address = this.getCollegeAddress(clgAddr);
  const letterno = letterNumber; // college letter number add new field
  const dateref = letterDate; // letter date  add new field
  const save_name = clg_name + '_' + current_date;
  
  const doc = new jsPdf();

  doc.setFontSize(13);
  // doc.setFont("");

  let x = 26;
  let y = 85;

  doc.fromHTML('The Principal,', x, y);

  y += 5;
  doc.fromHTML(clg_name + ',' , x, y);
  if(address[0] !== undefined) {
    y += 5;
    doc.fromHTML(address[0] + ',' , x, y);
  }
  if(address[1] !== undefined) {
    y += 5;
    doc.fromHTML(address[1] + ',' , x, y);
  }
  if(address[2] !== undefined) {
    y += 5;
    doc.fromHTML(address[2] + ',' , x, y);
  }
  if(address[3] !== undefined) {
    y += 5;
    doc.fromHTML(address[3] + ',' , x, y);
  }
  y += 10;
  doc.fromHTML('Dear Sir/Madam, ', x, y);
  
  y += 10;
  doc.fromHTML('<b>Sub</b>:- Registration of Youth Red Cross', 57, y);
  
  y += 5;
  if (letterno) {
    doc.fromHTML('<b>Ref</b>:- Your Letter No: <b>' + letterno , 57, y);
  } else {
    doc.fromHTML('<b>Ref</b>:- Your Letter No:', 57, y);
  }
  y += 5;
  doc.fromHTML('<b>Date</b>:- ' + dateref, 57, y);
  y += 5;
  doc.fromHTML('<sup>**********</sup>', 3.5 * x + 4, y);
  y += 5;
  doc.fromHTML('We acknowledge with thanks the receipt of <b>Bank Draft / Cheque No: ' + bankdraftOrCheckno + '</b> Dated:', 35, y);
  y += 5;
  doc.fromHTML('<b>' + bankdate + '</b>,  <b>' + bankdetails + '</b>', x, y);
  y += 5;
  doc.fromHTML('for <b>Rs.1,500/- (Rupees One Thousand Five Hundred Only) </b>towards onetime payment of ', x, y);
  y += 5;
  doc.fromHTML('College Registration.', x, y);
  y += 10;
  doc.fromHTML('Receipt No: ' + receiptNumber + ' Dated:' + receiptDate + ' for Rs.1,500/- is enclosed.', 35, y);
  
  // doc.fromHTML('Receipt No:' + receiptNumber, 35, 140);
  // doc.fromHTML('Dated:' + receiptDate, 80, 140);
  // doc.fromHTML('for Rs.1,500/- is enclosed.', 120, 140);
  
  y += 10;
  doc.fromHTML('Participation of students in Red Cross activities promotes understanding and accepting', 35, y);
  
  y += 5;
  doc.fromHTML('of civic responsibilities and maintaining a spirit of friendliness.', x, y);
  
  y += 10;
  doc.fromHTML('Thanking you, ', 37, y);
  y += 10;
  doc.fromHTML('Yours truly, ', x * 5.75 + 6, y);
  
  y += 20;
  doc.fromHTML('<b>General Secretary</b>', x * 5.75, y);

  doc.save(save_name + '.pdf');
}

  form2(clg_name, clgAddr, voucher_no, current_date, student_count, fee, letterNumber, receiptNumber, receiptDate) {

      const letterno = letterNumber; // college letter number custom field
      const dateref = current_date; // letter date
      // add 2 new fields for receipt number, receipt date
      const money = fee;
      const total = parseFloat(fee) + 1500;
      const stdno = student_count;
      
      let x = 26;
      let y = 85;
      const doc = new jsPdf();
      
      doc.setFontSize(13);
      // doc.setFont("Bookman Old Style");
      
      doc.fromHTML('The Principal,', x, y);
      y += 5;
      doc.fromHTML(clg_name + ',' , x, y);
      
      const address = this.getCollegeAddress(clgAddr);
      if(address[0] !== undefined) {
        y += 5;
        doc.fromHTML(address[0] + ',' , x, y);
      }
      if(address[1] !== undefined) {
        y += 5;
        doc.fromHTML(address[1] + ',' , x, y);
      }
      if(address[2] !== undefined) {
        y += 5;
        doc.fromHTML(address[2] + ',' , x, y);
      }
      if(address[3] !== undefined) {
        y += 5;
        doc.fromHTML(address[3] + ',' , x, y);
      }
      y += 10;
      doc.fromHTML('Dear Sir/Madam, ', x, y);
      
      y += 10;
      doc.fromHTML('<b>Sub</b>:- Registration of College and Sending student membership amount', 57, y);
      
      // REPLACE DATEREF WITH THE RESPECTIVE VALUE IN THE ACTUAL FORM
      y += 5;
      doc.fromHTML('<b>Ref</b>:- Your Letter No: <b>' + letterNumber + '</b> Date: <b>' + dateref + '</b>', 57, y);
      y += 5;
      doc.fromHTML('<sup>**********</sup>', 3.5 * x + 4, y);
      
      y += 5;
      doc.fromHTML('We acknowledge with thanks the receipt of D.D/Cheque for Rs.1,500/- <b>(Rupees One</b>', 35, y);
      
      y += 5;
      doc.fromHTML('<b>Thousand Five Hundred Only)</b> being the onetime payment of College Registration Fee', x, y);
      y += 5;
      doc.fromHTML('and ' + student_count + ' Students membership Fee 30% of Rs. '
      + this.csv(money) + ' (Total Rs: ' + this.csv(total) + ' )', x, y);

      // doc.fromHTML('Receipt No: ' + receiptNumber, 35, 130);
      // doc.fromHTML('Dated:', 80, 130);
      // doc.fromHTML('for Rs.' + this.csv(total) + ' is enclosed.', 120, 130);

      y += 10;
      doc.fromHTML('Receipt No: ' + receiptNumber + 'Dated: ' + receiptDate + ' for Rs.' + this.csv(total) + ' is enclosed.', 35, y);

      y += 5;
      doc.fromHTML('On behalf of Indian Red Cross Society,  Karnataka State Branch,  I thank you for your', 35, y);
      y += 5;
      doc.fromHTML('kind co-operation,  I request you to continue your co-operation in enrolling more number of', x, y);
      y += 5;
      doc.fromHTML('students every year at the time of admission. Kindly utilize 70% out of the membership fee', x, y);
      y += 5;
      doc.fromHTML('collected for Youth Red Cross activities mentioned in the guidelines.', x, y);
      
      y += 10;
      doc.fromHTML('Participation of students in Red Cross activities promotes understanding and accepting', 35, y);
      y += 5;
      doc.fromHTML('of civic responsibilities and maintaining a spirit of friendliness.', x, y);
      
      y += 10;
      doc.fromHTML('Thanking you, ', 37, y);
      y += 5;
      doc.fromHTML('Yours truly, ', x * 5.75 + 6, y);
      y += 20;
      doc.fromHTML('<b>General Secretary</b>', x * 5.75, y);

      doc.save(clg_name + '_' + current_date + '.pdf');

  }

  form3(clg_name, clgAddr, voucher_no, current_date, received_date, bank_details,
    student_count, fee, letterNumber, letterDate, receiptNumber, receiptDate) {
    const address = this.getCollegeAddress(clgAddr);
    const letterno = letterNumber;
    const dateref = current_date;
    const bankdraftOrCheckno = voucher_no;
    const bankdate = received_date;
    const bankdetails = bank_details;
    const money2text = '';
    const noStd = student_count;
    const money = fee;

    const doc = new jsPdf();
    let x = 26;
    let y = 85;
    doc.setFontSize(13);
    // doc.setFont("");

    doc.fromHTML('The Principal,', x, y);
    y += 5;
    doc.fromHTML(clg_name + ',' , x, y);
    if(address[0] !== undefined) {
      y += 5;
      doc.fromHTML(address[0] + ',' , x, y);
    }
    if (address[1] !== undefined) {
      y += 5;
      doc.fromHTML(address[1] + ',' , x, y);
    }
    if(address[2] !== undefined) {
      y += 5;
      doc.fromHTML(address[2] + ',' , x, y);
    }
    if(address[3] !== undefined) {
      y += 5;
      doc.fromHTML(address[3] + ',' , x, y);
    }

    y += 10;
    doc.fromHTML('Dear Sir/Madam, ', x, y);
    
    y += 10;
    doc.fromHTML('<b>Sub</b>:- Student Membership Amount.', 57, y);
    
    y += 5;
    doc.fromHTML('<b>Ref</b>:- Your Letter No: <b>' + letterNumber + '</b> Date: <b>' + letterDate + '</b>', 57, y);
    y += 5;
    doc.fromHTML('<sup>**********</sup>', 3.5 * x + 4, y);
    
    y += 5;
    doc.fromHTML('We acknowledge with thanks the receipt of <b>Bank Draft / Cheque No: ' + voucher_no + '</b> Dated:', 35, y);
    y += 5;
    doc.fromHTML('<b>' + received_date + '</b>,  <b>' + bankdetails + '</b>', x, y);
    y += 5;
    doc.fromHTML('for <b>Rs.' + this.csv(money) + ' ' + money2text + ' </b> towards 30% membership contribution from ' +
    noStd + ' students. ', x, y);
    
    y += 10;
    doc.fromHTML('Receipt No: ' + receiptNumber + ' Dated:' + receiptDate + ' for Rs.1, 500/- is enclosed herewith.', 35, y);
    
    y += 10;
    doc.fromHTML('Participation of students in Red Cross activities promotes understanding and accepting', 35, y);
    y += 5;
    doc.fromHTML('of civic responsibilities and maintaining a spirit of friendliness.', x, y);
    
    y += 10;
    doc.fromHTML('Thanking you, ', 37, y);
    y += 10;
    doc.fromHTML('Yours truly, ', x * 5.75 + 6, y);
    y += 20;
    doc.fromHTML('<b>General Secretary</b>', x * 5.75, y);

    doc.save(clg_name + '_' + current_date + '.pdf');
  }

  form4(clg_name, clgAddr, voucher_no, current_date, received_date, bank_details,
    student_count, fee, letterNumber, letterDate, receiptNumber, receiptDate) {

    const address = this.getCollegeAddress(clgAddr);
    const letterno = letterNumber;
    const dateref = current_date;
    const bankdraftOrCheckno = voucher_no;
    const bankdate = received_date;
    const bankdetails = bank_details;
    const money2text = '';
    const noStd = student_count;
    const money = fee;
    const receiptMoney = 'receipt money';
    const actual_money = '';

    const doc = new jsPdf();
    let x = 26;
    let y = 85;
    doc.setFontSize(13);
    // doc.setFont("");

    doc.fromHTML('The Principal,', x, y);
    y += 5;
    doc.fromHTML(clg_name + ',' , x, y);
    if(address[0] !== undefined) {
      y += 5;
      doc.fromHTML(address[0] + ',' , x, y);
    }
    if(address[1] !== undefined) {
      y += 5;
      doc.fromHTML(address[1] + ',' , x, y);
    }
    if(address[2] !== undefined) {
      y += 5;
      doc.fromHTML(address[2] + ',' , x, y);
    }
    if(address[3] !== undefined) {
      y += 5;
      doc.fromHTML(address[3] + ',' , x, y);
    }
    y += 10;
    doc.fromHTML('Dear Sir/Madam, ', x, y);
    
    y += 10;
    doc.fromHTML('<b>Sub:- Student Membership Amount.</b>', 57, y);
    y += 5;
    doc.fromHTML('<b>Ref</b>:- Your Letter No: <b>' + letterNumber + '</b> Date: <b>' + letterDate + '</b>', 57, y);
    y += 5;
    doc.fromHTML('<sup>**********</sup>', 3.5 * x + 4, y);
    
    y += 5;
    doc.fromHTML('We acknowledge with thanks the receipt of <b>Bank Draft / Cheque No: ' + voucher_no + '</b> Dated:', 35, y);
    y += 5;
    doc.fromHTML('<b>' + received_date + '</b>,  <b>' + bank_details + '</b>', x, y);
    
    y += 5;
    doc.fromHTML('for <b>Rs.' + this.csv(money) + ' ' + money2text + ' </b> towards 30% membership contribution from ' + student_count +
      ' Students. ', x, y);
    
    y += 10;
    doc.fromHTML('Receipt No:' + receiptNumber + ' Dated:' + receiptDate + ' for Rs.'
    + this.csv(actual_money) + ' is enclosed.', 35, y);
    
    y += 10;
    doc.fromHTML('So far your College has not enrolled in the youth Red Cross wing. Therefore,  I request', 35, y);
    y += 5;
    doc.fromHTML('you kindly to register your college by paying one-time payment of Rs.1, 500/- as per', x, y);
    y += 5;
    doc.fromHTML('Government order No: ED 64/ Miscellaneous/2011 Bengaluru dtd. 22/12/2011.', x, y);
    
    y += 10;
    doc.fromHTML('Thanking you, ', 37, y);
    y += 10;
    doc.fromHTML('Yours truly, ', x * 5.75 + 6, y);
    y += 25;
    doc.fromHTML('<b>General Secretary</b>', x * 5.75, y);

    doc.save(clg_name + '_' + current_date + '.pdf');
  }
}
