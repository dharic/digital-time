import { Component } from '@angular/core';

@Component({
  selector: 'app-digital-time',
  templateUrl: './digital-time.component.html',
  styleUrls: ['./digital-time.component.scss']
})
export class DigitalTimeComponent {

  // list = [
  //   { name: 'one', id: 1 },
  //   { name: 'two', id: 2 },
  //   { name: 'three', id: 3 },
  // ];
  // leftlist = [
  //   { name: 'two', id: 2 },
  //   { name: 'three', id: 3 },
  // ];
  // rightlist = [{ name: 'one', id: 1 }];
  constructor() {}
  // topOn: boolean = false;
  // topRightOn: boolean = false;
  // bottomRightOn: boolean = false;
  // bottomOn: boolean = false;
  // bottomLeftOn: boolean = false;
  // topLeftOn: boolean = false;
  // centerOn: boolean = false;
  sZero = false;
  sOne = false;
  sTwo = false;
  sThree = false;
  sFour = false;
  sFive = false;
  sSix = false;
  sSeven = false;
  sEight = false;
  digit = [
    '1111110',
    '0110000',
    '1101101',
    '1111001',
    '0110011',
    '1011011',
    '1011111',
    '1110000',
    '1111111',
    '1111011',
  ];
  // spltTime = ['1', '2', ':', '3', '4', ':', '5', '9'];
  timeSegArr: any[] = [];
  iscolonon = true
  // arr = [
  //   {
  //     name: 1,
  //     seg: {
  //       zero: false,
  //       one: false,
  //       two: false,
  //       three: false,
  //       four: false,
  //       five: false,
  //       six: false,
  //       seven: false,
  //     },
  //   },
  //   {
  //     name: ':',
  //     seg: {
  //       zero: false,
  //       one: false,
  //       two: false,
  //       three: false,
  //       four: false,
  //       five: false,
  //       six: false,
  //       seven: false,
  //     },
  //   },
  // ];

  ngOnInit() {
    // const a = new Function('a', 'b', 'return a+b');
    // let ans = a(1, 4);
    // console.log(ans);
    let num = 0;
    let time = '12:34:59';
    let splTime = ['1', '2', ':', '3', '4', ':', '5', '9'];
    // this.getSegmentDet();
    setInterval(() => {
      this.iscolonon = !this.iscolonon
    }, 500);
    setInterval(() => {
      // this.iscolonon = !this.iscolonon
      this.getSegmentDet();
    }, 1000);

  }

  // dragstart(e: any, item: any) {
  //   console.log(e, item);
  // }
  // dragend(e: any) {
  //   console.log(e);
  // }
  getSegmentDet() {
    const dt = new Date();
    let timeStr =
      (dt.getHours() <= 9 ? '0' : (dt.getHours() > 12)? String((dt.getHours() - 12)) : dt.getHours()) +
      // dt.getHours() +
      ':' +
      (dt.getMinutes() <= 9 ? '0' : '') +
      dt.getMinutes() +
      ':' +
      (dt.getSeconds() <= 9 ? '0' : '') +
      dt.getSeconds();
    // timeStr = '12:34:09';
    let spltarr = timeStr.split('');
    this.timeSegArr = [];
    spltarr.forEach((el) => {
      let obj = {
        name: el,
        seg: this.getSegObj(el),
      };
      this.timeSegArr.push(obj);
    });
  }
  getSegObj(num: any) {
    if (num == ':') {
      return {
        zero: false,
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
      };
    }
    let digit: any = this.digit[num].split('');
    let obj = {
      zero: Boolean(Number(digit[0])),
      one: Boolean(Number(digit[1])),
      two: Boolean(Number(digit[2])),
      three: Boolean(Number(digit[3])),
      four: Boolean(Number(digit[4])),
      five: Boolean(Number(digit[5])),
      six: Boolean(Number(digit[6])),
    };
    return obj;
  }

}
