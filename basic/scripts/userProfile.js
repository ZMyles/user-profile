
const profile = {
  template: `
    <div class="container">
      <img src="css/images/leo.jpg">
        <h1>Leo</h1>
        <span>FillerEmail@email.com</span>
        <p>Just filler text<p>
        <button ng-model="form" ng-init="form = true">Edit</button>
    </div>
  `,
  //  controller: function () {
  //   const vm = this;
  //   vm.userInput = {
  //     name: name,
  //     contact: contact,
  //     bio: bio
  //   }
    
   
}



angular
      .module("App")
      .component("profile", profile)