import { Directive, Renderer2, ElementRef, OnInit, HostListener } from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective implements OnInit {
  isOpen = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {

  }

  @HostListener("click") click() {
    if (this.isOpen) {
      this.renderer.removeClass(this.elementRef.nativeElement, "open");
    } else {
      this.renderer.addClass(this.elementRef.nativeElement, "open");
    }
    this.isOpen = !this.isOpen;
  }
}