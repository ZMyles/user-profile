
const profile = {
  template: `
    <div class="container">
        <h1>HEY</h1>
        <span>Just filler Email</span>
        <p>Just filler text<p>
        <button>Edit</button>
    </div>
  `,
   controller: function () {
    const vm = this;
    vm.userInput = {
      name: name,
      contact: contact,
      bio: bio
    }
    
   }
}



angular
      .module("App")
      .component("profile", profile)