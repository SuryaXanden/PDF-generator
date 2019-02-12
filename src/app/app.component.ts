import { Component } from '@angular/core';

import * as jsPdf from 'jspdf';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  pdf1()
  {
    let bankdraftOrCheckno = '231356';
    let bankdate = '12-02-2019';
    let bankdetails = 'Bank address';
    
    let address = 'complete \naddress\n of\n 5\n lines\n';
    let letterno = 'alnum';
    let dateref = '11-02-2019';

    let receiptno = '12345678';
    let receiptdate = 'dd-mm-yyyy';
    
    let clg_name = 'CEC';
    let ac_year = '2k19';

    const doc = new jsPdf();

    doc.setFontSize(13);
    // doc.setFont("");

    doc.fromHTML('The Principal,',26,50);
    doc.fromHTML(address,26,55);
    // from here v---
    doc.fromHTML('Address 2,',26,60);
    doc.fromHTML('Address 3,',26,65);
    doc.fromHTML('Address 4,',26,70);
    doc.fromHTML('Address 5',26,75);
    // until here ^---    
    doc.fromHTML('Dear Sir/Madam,',26,85);

      doc.fromHTML('<b>Sub</b>:- Registration of Youth Red Cross',57,95);
      doc.fromHTML('<b>Ref</b>:- Your Letter No: <b>' + letterno + '</b> Date: <b>' + dateref + '</b>',57,100);
    doc.fromHTML('<sup>**********</sup>',3.5*26+4,105);
    
      doc.fromHTML('We acknowledge with thanks the receipt of <b>Bank Draft / Cheque No: ' + bankdraftOrCheckno + '</b> Dated:',35,110);
    doc.fromHTML('<b>'+ bankdate + '</b>, <b>' + bankdetails + '</b>',26,115);
    doc.fromHTML('for <b>Rs.1,500/- (Rupees One Thousand Five Hundred Only) </b>towards onetime payment of ',26,120);
    doc.fromHTML('College Registration.',26,125);

      doc.fromHTML('Receipt No: <b>' + receiptno + '</b> Dated: <b>' + receiptdate + '</b> for <b>Rs.1,500/-</b> is enclosed.',35,135);

      doc.fromHTML('Participation of students in Red Cross activities promotes understanding and accepting',35,145);
    doc.fromHTML('of civic responsibilities and maintaining a spirit of friendliness.',26,150);
    
    doc.fromHTML('Thanking you,',37,160);
    doc.fromHTML('Yours truly,',26*5.75+6,170);
    doc.fromHTML('<b>General Secretary</b>',26*5.75,190);

    doc.save(clg_name + '-' + ac_year + '.pdf');
  }

  pdf2()
  {
    let address = 'complete \naddress\n of\n 5\n lines\n';
    let letterno = 'alnum';
    let dateref = '11-02-2019';
    let receiptno = '12345678';
    let receiptdate = 'dd-mm-yyyy';
    
    let money = 'money';
    let total = 'summation';
    let stdno = 'num';
    
    let clg_name = 'CEC';
    let ac_year = '2k19';

    const doc = new jsPdf();

    doc.setFontSize(13);
    // doc.setFont("Bookman Old Style");

    doc.fromHTML('The Principal,',26,50);
    doc.fromHTML(address,26,55);
    // from here v---
    doc.fromHTML('Address 2,',26,60);
    doc.fromHTML('Address 3,',26,65);
    doc.fromHTML('Address 4,',26,70);
    doc.fromHTML('Address 5',26,75);
    // until here ^---    
    doc.fromHTML('Dear Sir/Madam,',26,85);

    doc.fromHTML('<b>Sub</b>:- Registration of College and Sending student membership amount',57,95);
    doc.fromHTML('<b>Ref</b>:- Your Letter No: <b>' + letterno + '</b> Date: <b>' + dateref + '</b>',57,100);
    doc.fromHTML('<sup>**********</sup>',3.5*26+4,105);
    
      doc.fromHTML('We acknowledge with thanks the receipt of D.D/Cheque for Rs.1,500/- <b>(Rupees One</b>',35,110);
    doc.fromHTML('<b>Thousand Five Hundred Only)</b> being the onetime payment of College Registration Fee',26,115);
    doc.fromHTML('and ' + stdno + ' Students membership Fee 30% of Rs. ' + money + '/- (Total Rs: ' + total + '/- )',26,120);
    
      doc.fromHTML('Receipt No: <b>' + receiptno + '</b> Dated: <b>' + receiptdate + '</b> for <b>Rs.1,500/-</b> is enclosed.',35,130);

      doc.fromHTML('On behalf of Indian Red Cross Society, Karnataka State Branch, I thank you for your',35,140);
    doc.fromHTML('kind co-operation, I request you to continue your co-operation in enrolling more number of',26,145);
    doc.fromHTML('students every year at the time of admission. Kindly utilize 70% out of the membership fee',26,150);
    doc.fromHTML('collected for Youth Red Cross activities mentioned in the guidelines.',26,155);
    
    doc.fromHTML('Participation of students in Red Cross activities promotes understanding and accepting',35,165);
  doc.fromHTML('of civic responsibilities and maintaining a spirit of friendliness.',26,170);

  doc.fromHTML('Thanking you,',37,180);
  doc.fromHTML('Yours truly,',26*5.75+6,185);
  doc.fromHTML('<b>General Secretary</b>',26*5.75,205);

    doc.save(clg_name + '-' + ac_year + '.pdf');
    
  }

  pdf3()
  {
    let clg_name = 'CEC';
    let ac_year = '2k19';

    let address = 'complete \naddress\n of\n 5\n lines\n';
    let letterno = 'alnum';
    let dateref = '11-02-2019';
    let bankdraftOrCheckno = '231356';
    let bankdate = '12-02-2019';
    let bankdetails = 'Bank address';  
    let money = 'actual sum';
    let money2text = '';
    let noStd = '1234';
    let receiptno = '12345678';
    let receiptdate = 'dd-mm-yyyy';    

    const doc = new jsPdf();

    doc.setFontSize(13);
    // doc.setFont("");

    doc.fromHTML('The Principal,',26,50);
    doc.fromHTML(address,26,55);
    // from here v---
    doc.fromHTML('Address 2,',26,60);
    doc.fromHTML('Address 3,',26,65);
    doc.fromHTML('Address 4,',26,70);
    doc.fromHTML('Address 5',26,75);
    // until here ^---    
    doc.fromHTML('Dear Sir/Madam,',26,85);

      doc.fromHTML('<b>Sub</b>:- Student Membership Amount.',57,95);
      doc.fromHTML('<b>Ref</b>:- Your Letter No: <b>' + letterno + '</b> Date: <b>' + dateref + '</b>',57,100);
    doc.fromHTML('<sup>**********</sup>',3.5*26+4,105);
    
      doc.fromHTML('We acknowledge with thanks the receipt of <b>Bank Draft / Cheque No: ' + bankdraftOrCheckno + '</b> Dated:',35,110);
    doc.fromHTML('<b>'+ bankdate + '</b>, <b>' + bankdetails + '</b>',26,115);
    doc.fromHTML('for <b>Rs.' + money + '/- ' + money2text + ' </b> towards 30% membership contribution from ' + noStd + ' students. ',26,120);
    // doc.fromHTML('College Registration.',26,125);

      doc.fromHTML('Receipt No: <b>' + receiptno + '</b> Dated: <b>' + receiptdate + '</b> for <b>Rs.1,500/-</b> is enclosed herewith.',35,130);

      doc.fromHTML('Participation of students in Red Cross activities promotes understanding and accepting',35,140);
    doc.fromHTML('of civic responsibilities and maintaining a spirit of friendliness.',26,145);
    
    doc.fromHTML('Thanking you,',37,155);
    doc.fromHTML('Yours truly,',26*5.75+6,165);
    doc.fromHTML('<b>General Secretary</b>',26*5.75,185);

    doc.save(clg_name + '-' + ac_year + '.pdf');
  }

  pdf4()
  {
    let clg_name = 'CEC';
    let ac_year = '2k19';

    let address = 'complete \naddress\n of\n 5\n lines\n';
    //change here and while printing
    let letterno = 'alnum';
    let dateref = '11-02-2019';

    let bankdraftOrCheckno = '231356';
    let bankdate = '12-02-2019';
    let bankdetails = 'Bank address';  
    let money = 'actual sum';
    let money2text = '';
    let noStd = '1234';
    let receiptno = '12345678';
    let receiptdate = 'dd-mm-yyyy';    
    let receiptMoney = 'receipt money';

    const doc = new jsPdf();

    doc.setFontSize(13);
    // doc.setFont("");

    doc.fromHTML('The Principal,',26,50);
    doc.fromHTML(address,26,55);
    // from here v---
    doc.fromHTML('Address 2,',26,60);
    doc.fromHTML('Address 3,',26,65);
    doc.fromHTML('Address 4,',26,70);
    doc.fromHTML('Address 5',26,75);
    // until here ^---    
    doc.fromHTML('Dear Sir/Madam,',26,85);

      doc.fromHTML('<b>Sub:- Student Membership Amount.</b>',57,95);
      doc.fromHTML('<b>Ref</b>:- Your Letter No: <b>' + letterno + '</b> Date: <b>' + dateref + '</b>',57,100);
    doc.fromHTML('<sup>**********</sup>',3.5*26+4,105);
    
      doc.fromHTML('We acknowledge with thanks the receipt of <b>Bank Draft / Cheque No: ' + bankdraftOrCheckno + '</b> Dated:',35,110);
    doc.fromHTML('<b>'+ bankdate + '</b>, <b>' + bankdetails + '</b>',26,115);
    doc.fromHTML('for <b>Rs.' + money + '/- ' + money2text + ' </b> towards 30% membership contribution from ' + noStd + ' Students. ',26,120);
    
      doc.fromHTML('Receipt No: <b>' + receiptno + '</b> Dated: <b>' + receiptdate + ' for Rs.' + receiptMoney + '/-</b> is enclosed.',35,130);

      doc.fromHTML('So far your College has not enrolled in the youth Red Cross wing. Therefore, I request',35,140);
    doc.fromHTML('you kindly to register your college by paying one-time payment of Rs.1,500/- as per',26,145);
    doc.fromHTML('Government order No: ED 64/ Miscellaneous/2011 Bengaluru dtd. 22/12/2011.',26,150);

    
    doc.fromHTML('Thanking you,',37,160);
    doc.fromHTML('Yours truly,',26*5.75+6,170);
    doc.fromHTML('<b>General Secretary</b>',26*5.75,195);

    doc.save(clg_name + '-' + ac_year + '.pdf');
  }
}
