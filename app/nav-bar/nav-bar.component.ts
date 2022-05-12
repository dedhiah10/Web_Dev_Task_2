import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector:'nav-bar',
    template: `
        <div class="navBar">
            <img src="../../assets/logo.png" alt="Logo" >
            <span class="profile"><img src="../../assets/MyAccountImg.jpg" class="profileImg">&nbsp;&nbsp;My Account</span>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class NavBarComponent {

}