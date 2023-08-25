import { Component, ViewChild } from '@angular/core';
import { BarcodeScannerLivestreamComponent } from "ngx-barcode-scanner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(BarcodeScannerLivestreamComponent)
  public barcodeScanner?: BarcodeScannerLivestreamComponent;

  public barcodeValue: any;

  ngAfterViewInit() {
    this.barcodeScanner?.start();
  }

  onValueChanges(result: { codeResult: { code: any; }; }) {
    this.barcodeValue = result.codeResult.code;
  }

  onStarted(started: any) {
    console.log(started);
  }
}
