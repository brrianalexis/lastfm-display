export const SOUNDBARS = `<div id="bars">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
`;

export const STYLE_TAG = `
  <style>
    div {
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
    }

    .container {
      display: flex;
      flex-direction: column;
      padding: 10px;
      gap: 20px;
    }

    .now-playing-section {
      display: flex;
      flex-direction: column;
    }

    .currentStatus {
      font-size: 24px;
      margin-bottom: 15px;
    }

    .main {
      display: flex;
      gap: 15px;
    }

    .art {
      width: 100px;
    }

    .content {
      flex: 1;
      position: relative;
    }

    .cover {
      border-radius: 5px;
      height: 100px;
      width: 100px;
    }

    .song {
      font-size: 24px;
      color: #666;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .artist {
      font-size: 20px;
      color: #b3b3b3;
      margin-top: 4px;
    }

    .weekly-artists {
      margin-top: 20px;
      border-top: 1px solid #eaeaea;
      padding-top: 20px;
    }

    .weekly-artists-title {
      font-size: 24px;
      margin-bottom: 15px;
      color: #666;
    }

    .artist-row {
      display: flex;
      align-items: center;
      padding: 8px 0;
      border-bottom: 1px solid #eaeaea;
    }

    .artist-rank {
      font-size: 20px;
      width: 40px;
      text-align: center;
    }

    .artist-info {
      display: flex;
      align-items: center;
      flex: 1;
    }

    .artist-name {
      margin-left: 10px;
      font-size: 16px;
      color: #666;
    }

    .artist-plays {
      font-size: 14px;
      color: #b3b3b3;
      margin-left: auto;
    }

    #bars {
      height: 30px;
      margin-top: 10px;
      position: relative;
      width: 40px;
    }

    .bar {
      background: #1DB954cc;
      bottom: 1px;
      height: 3px;
      position: absolute;
      width: 3px;
      animation: sound 0ms -800ms linear infinite alternate;
    }

    @media (prefers-color-scheme: dark) {
      .currentStatus,
      .song,
      .artist-name {
        color: #ffffff;
      }

      .artist-plays {
        color: #b3b3b3;
      }

      .artist-row {
        border-bottom: 1px solid #333;
      }

      .weekly-artists {
        border-top: 1px solid #333;
      }

      .weekly-artists-title {
        color: #fff;
      }
    }

    @keyframes sound {
      0% {
        opacity: .35;
        height: 3px;
      }

      100% {
        opacity: 1;
        height: 15px;
      }
    }

    .bar:nth-child(1) {
      left: 1px;
      animation-duration: 1350ms;
    }

    .bar:nth-child(2) {
      left: 5px;
      animation-duration: 1082ms;
    }

    .bar:nth-child(3) {
      left: 9px;
      animation-duration: 1081ms;
    }

    .bar:nth-child(4) {
      left: 13px;
      animation-duration: 1250ms;
    }

    .bar:nth-child(5) {
      left: 17px;
      animation-duration: 1024ms;
    }

    .bar:nth-child(6) {
      left: 21px;
      animation-duration: 1300ms;
    }

    .bar:nth-child(7) {
      left: 25px;
      animation-duration: 1220ms;
    }

    .bar:nth-child(8) {
      left: 29px;
      animation-duration: 1099ms;
    }

    .bar:nth-child(9) {
      left: 33px;
      animation-duration: 1274ms;
    }

    .bar:nth-child(10) {
      left: 37px;
      animation-duration: 1228ms;
    }

    .bar:nth-child(11) {
      left: 41px;
      animation-duration: 1274ms;
    }

    .bar:nth-child(12) {
      left: 45px;
      animation-duration: 1050ms;
    }

    .bar:nth-child(13) {
      left: 49px;
      animation-duration: 1075ms;
    }

    .bar:nth-child(14) {
      left: 53px;
      animation-duration: 1056ms;
    }

    .bar:nth-child(15) {
      left: 57px;
      animation-duration: 1232ms;
    }

    .bar:nth-child(16) {
      left: 61px;
      animation-duration: 1302ms;
    }

    .bar:nth-child(17) {
      left: 65px;
      animation-duration: 1339ms;
    }

    .bar:nth-child(18) {
      left: 69px;
      animation-duration: 1100ms;
    }

    .bar:nth-child(19) {
      left: 73px;
      animation-duration: 1143ms;
    }

    .bar:nth-child(20) {
      left: 77px;
      animation-duration: 1260ms;
    }

    .bar:nth-child(21) {
      left: 81px;
      animation-duration: 1015ms;
    }

    .bar:nth-child(22) {
      left: 85px;
      animation-duration: 1098ms;
    }

    .bar:nth-child(23) {
      left: 89px;
      animation-duration: 1175ms;
    }

    .bar:nth-child(24) {
      left: 93px;
      animation-duration: 1218ms;
    }

    .bar:nth-child(25) {
      left: 97px;
      animation-duration: 1075ms;
    }

    .bar:nth-child(26) {
      left: 101px;
      animation-duration: 1107ms;
    }

    .bar:nth-child(27) {
      left: 105px;
      animation-duration: 1331ms;
    }

    .bar:nth-child(28) {
      left: 109px;
      animation-duration: 1104ms;
    }

    .bar:nth-child(29) {
      left: 113px;
      animation-duration: 1013ms;
    }

    .bar:nth-child(30) {
      left: 117px;
      animation-duration: 1295ms;
    }

    .bar:nth-child(31) {
      left: 121px;
      animation-duration: 1238ms;
    }

    .bar:nth-child(32) {
      left: 125px;
      animation-duration: 1064ms;
    }

    .bar:nth-child(33) {
      left: 129px;
      animation-duration: 1241ms;
    }

    .bar:nth-child(34) {
      left: 133px;
      animation-duration: 1264ms;
    }

    .bar:nth-child(35) {
      left: 137px;
      animation-duration: 1021ms;
    }

    .bar:nth-child(36) {
      left: 141px;
      animation-duration: 1274ms;
    }

    .bar:nth-child(37) {
      left: 145px;
      animation-duration: 1153ms;
    }

    .bar:nth-child(38) {
      left: 149px;
      animation-duration: 1308ms;
    }

    .bar:nth-child(39) {
      left: 153px;
      animation-duration: 1141ms;
    }

    .bar:nth-child(40) {
      left: 157px;
      animation-duration: 1284ms;
    }

    .bar:nth-child(41) {
      left: 161px;
      animation-duration: 1286ms;
    }

    .bar:nth-child(42) {
      left: 165px;
      animation-duration: 1161ms;
    }

    .bar:nth-child(43) {
      left: 169px;
      animation-duration: 1146ms;
    }

    .bar:nth-child(44) {
      left: 173px;
      animation-duration: 1044ms;
    }

    .bar:nth-child(45) {
      left: 177px;
      animation-duration: 1106ms;
    }

    .bar:nth-child(46) {
      left: 181px;
      animation-duration: 1088ms;
    }

    .bar:nth-child(47) {
      left: 185px;
      animation-duration: 1146ms;
    }

    .bar:nth-child(48) {
      left: 189px;
      animation-duration: 1173ms;
    }

    .bar:nth-child(49) {
      left: 193px;
      animation-duration: 1170ms;
    }

    .bar:nth-child(50) {
      left: 197px;
      animation-duration: 1023ms;
    }

    .bar:nth-child(51) {
      left: 201px;
      animation-duration: 1274ms;
    }

    .bar:nth-child(52) {
      left: 205px;
      animation-duration: 1206ms;
    }

    .bar:nth-child(53) {
      left: 209px;
      animation-duration: 1212ms;
    }

    .bar:nth-child(54) {
      left: 213px;
      animation-duration: 1249ms;
    }

    .bar:nth-child(55) {
      left: 217px;
      animation-duration: 1062ms;
    }

    .bar:nth-child(56) {
      left: 221px;
      animation-duration: 1289ms;
    }

    .bar:nth-child(57) {
      left: 225px;
      animation-duration: 1068ms;
    }

    .bar:nth-child(58) {
      left: 229px;
      animation-duration: 1058ms;
    }

    .bar:nth-child(59) {
      left: 233px;
      animation-duration: 1034ms;
    }

    .bar:nth-child(60) {
      left: 237px;
      animation-duration: 1080ms;
    }

    .bar:nth-child(61) {
      left: 241px;
      animation-duration: 1246ms;
    }

    .bar:nth-child(62) {
      left: 245px;
      animation-duration: 1145ms;
    }

    .bar:nth-child(63) {
      left: 249px;
      animation-duration: 1009ms;
    }

    .bar:nth-child(64) {
      left: 253px;
      animation-duration: 1333ms;
    }

    .bar:nth-child(65) {
      left: 257px;
      animation-duration: 1196ms;
    }

    .bar:nth-child(66) {
      left: 261px;
      animation-duration: 1060ms;
    }

    .bar:nth-child(67) {
      left: 265px;
      animation-duration: 1209ms;
    }

    .bar:nth-child(68) {
      left: 269px;
      animation-duration: 1268ms;
    }

    .bar:nth-child(69) {
      left: 273px;
      animation-duration: 1030ms;
    }

    .bar:nth-child(70) {
      left: 277px;
      animation-duration: 1069ms;
    }

    .bar:nth-child(71) {
      left: 281px;
      animation-duration: 1214ms;
    }

    .bar:nth-child(72) {
      left: 285px;
      animation-duration: 1115ms;
    }

    .bar:nth-child(73) {
      left: 289px;
      animation-duration: 1048ms;
    }

    .bar:nth-child(74) {
      left: 293px;
      animation-duration: 1227ms;
    }

    .bar:nth-child(75) {
      left: 297px;
      animation-duration: 1309ms;
    }

    .bar:nth-child(76) {
      left: 301px;
      animation-duration: 1083ms;
    }

    .bar:nth-child(77) {
      left: 305px;
      animation-duration: 1074ms;
    }

    .bar:nth-child(78) {
      left: 309px;
      animation-duration: 1271ms;
    }

    .bar:nth-child(79) {
      left: 313px;
      animation-duration: 1105ms;
    }

    .bar:nth-child(80) {
      left: 317px;
      animation-duration: 1262ms;
    }

    .bar:nth-child(81) {
      left: 321px;
      animation-duration: 1198ms;
    }

    .bar:nth-child(82) {
      left: 325px;
      animation-duration: 1055ms;
    }

    .bar:nth-child(83) {
      left: 329px;
      animation-duration: 1309ms;
    }

    .bar:nth-child(84) {
      left: 333px;
      animation-duration: 1302ms;
    }
  </style>
`;
