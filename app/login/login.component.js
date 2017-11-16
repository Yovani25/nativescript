"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.goToSignUp = function () {
        this.router.navigate(['signup']);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "ns-login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQVF6QztJQUVJLHdCQUFxQixNQUFhO1FBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztJQUFJLENBQUM7SUFFdkMsbUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtJQUVBLENBQUM7SUFWUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQUc4QixlQUFNO09BRnpCLGNBQWMsQ0FXMUI7SUFBRCxxQkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWxvZ2luXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgIFxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjpSb3V0ZXIpIHsgfVxuXG4gICAgZ29Ub1NpZ25VcCgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NpZ251cCddKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgXG4gICAgfVxufSJdfQ==