<template>
    <div>
    <a-scene>
    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
            <div v-for="(item,id) in items" ></div>
            <a-sphere v-for="location in boxLocations" :position="`0 ${location} -5`" radius="1.25" color="#EF2D5E"></a-sphere>
            <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
            <a-sky color="#ECECEC"></a-sky>
    </a-scene>
        </div>
</template>

<script>

    import UploadButton from '../components/UploadButton';

    export default {
        components: {
            UploadButton
        },

        data(){
            return {
                hey: 'hey',
                boxLocations: [0,2,4,6,8]
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
