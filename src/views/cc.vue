<template>

  <div>{{hey}}</div>

</template>

<script>

  export default {

    data(){
        return {
            hey: 'hey'
        }
    },

    created(){
        console.log('hello!');
    }


  }

// /**
//    * Reads a file
//    * @param {File} file A file
//    * @param {String} readAs One of
//    *  - readAsArrayBuffer
//    *  - readAsBinaryString
//    *  - readAsDataURL
//    *  - readAsText
//    * @param {Function} progressCallback
//    * @return {Promise}
//    */
//   readFile(file, readAs, progressCallback = null) {
//     const reader = new FileReader();
//     if (reader[readAs] && readAs !== 'abort') this.debug(`readAs method '${readAs}' not implemented`);
//     return new EmberPromise((resolve, reject) => {
//       reader.onload = (event) => {
//         resolve({
//           filename: file.name,
//           name: file.name,
//           type: file.type,
//           data: event.target.result,
//           size: file.size
//         });
//       };
//       reader.onabort = () => {
//         reject({ event: 'onabort' });
//       };
//       reader.onerror = (error) => {
//         reject({ event: 'onerror', error: error });
//       };
//       if (typeof progressCallback === 'function') {
//         reader.onprogress = progressCallback;
//       }
//       reader[readAs](file);
//     });
//   },

//   /**
//    * When the file input changed (a file got selected)
//    * @param  {Event} event The file change event
//    */
//   filesSelected(event) {
//     let files = event.target.files;
//     if (files.length) {
//       this.handleFiles(files);
//     } else {
//       this.set('progressValue', 0);
//     }
//   },

//   handleFiles(files) {
//     if (typeof this.filesAreValid === 'function') {
//       if (!this.filesAreValid(files)) {
//         return;
//       }
//     }
//     this.set('showProgress', true);
//     this.$('.kt-file-picker-dropzone').hide();
//     this.readFile(files[0], 'readAsDataURL', bind(this, 'updateProgress'))
//       .then(() => this.doneReadAsDataURL());
//     if (this.multiple) {
//       this.filesLoaded(files);
//     } else {
//       if (this.readAs === 'readAsFile') {
//         this.fileLoaded(files[0]);
//       } else {
//         this.readFile(files[0], this.readAs, bind(this, 'updateProgress'))
//           .then((file) => this.readAs(file));
//       }
//     }
//     if (!this.hideFileInput) {
//       this.$('.kt-file-picker-input').val(null);
//     }
//   },

//   doneReadAsDataURL() {
//     this.hideProgress();
//     this.$('.kt-file-picker-dropzone').show();
//   },

//   doneReadAs(file) {
//     this.fileLoaded(file);
//   },


</script>
