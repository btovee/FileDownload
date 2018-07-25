const https = require('https');
const http = require('http');
const fs = require('fs');
const url = require("url");
const path = require("path");
const FileDownload = require("./FileDownload");



const fileList = [
    "http://www.lolcats.com/images/u/13/39/tastegood.jpg",
    "http://www.lolcats.com/images/u/11/23/lolcatsdotcomuu378xml5m6xkh1c.jpg",
    "http://www.lolcats.com/images/u/12/43/lolcatsdotcomlikemyself.jpg",
    "http://www.lolcats.com/images/u/12/43/lolcatsdotcomlittlepooped.jpg",
    "https://media.mnn.com/assets/images/2012/11/pw_1.jpg"
  ];
  
let fileDownload = new FileDownload(https, http, fs, url, path);
fileDownload.downloadFileFromList(fileList);