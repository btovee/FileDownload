module.exports = class FileDownload {

  constructor(
    https,
    http,
    fs,
    url,
    path
  ) {
    this.https = https
    this.http = http;
    this.fs = fs;
    this.url = url;
    this.path = path;
  }

  parseUrlForFileName(url) {
    let parsed = this.url.parse(url);
    return this.path.basename(parsed.pathname);
  }

  executeFileDownload(url, fileName = "") {
    let http;

    if (!fileName) {
      fileName = this.parseUrlForFileName(url);
    }

    let file = this.fs.createWriteStream(fileName);

    if (this.isHttps(url) === true) {
      http = this.https;
    } else {
      http = this.http;
    }

    let request = http.get(url, (response) => {
      response.pipe(file);
    });
  }

  isHttps(url) {
    if (url.indexOf("https://") == 0) {
      return true;
    } else {
      return false;
    }
  }

  downloadFileFromList(fileList) {
    for (const key in fileList) {
      if (fileList.hasOwnProperty(key)) {
        this.executeFileDownload(fileList[key]);
      }
    }
  }


}