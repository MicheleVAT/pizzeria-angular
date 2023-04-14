import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pizza-editor',
  templateUrl: './pizza-editor.component.html',
  styleUrls: ['./pizza-editor.component.scss']
})

export class PizzaEditorComponent {
  ingredienti: Map<number,string>;
  impasti: Map<number,string>;

  @Input() id : number = 0;

  constructor(){
    this.ingredienti = this.getIngredienti();
    this.impasti = this.getImpasti();
  }

  //TODO query
  private getIngredienti(): Map<number,string>{
    var m = new Map();
      m.set(0,"IngredienteProva0");
      m.set(1,"IngredienteProva1");
      m.set(2,"IngredienteProva2");
      m.set(3,"IngredienteProva3");
      m.set(4,"IngredienteProva4");
      m.set(5,"IngredienteProva5");
      m.set(6,"IngredienteProva6");
    return m;
  }

  //TODO query
  private getImpasti(): Map<number,string>{
    var m = new Map();
      m.set(0,"ImpastoProva0");
      m.set(1,"ImpastoProva1");
      m.set(2,"ImpastoProva2");
      m.set(3,"ImpastoProva3");
      m.set(4,"ImpastoProva4");
      m.set(5,"ImpastoProva5");
      m.set(6,"ImpastoProva6");
    return m;
  }

  onClickSubmit(data:any){}
}
