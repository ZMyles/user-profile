
const editProfile = {
  template: `
    <div>
      <span></span>
      <label>Name<label>
      <input type="text">
      <label>Contact</label>
      <input type="text">
      <label>Bio</label>
      <textarea></textarea>
    </div>
  `
}



angular
    .module("App")
    .component("editProfile", editProfile)