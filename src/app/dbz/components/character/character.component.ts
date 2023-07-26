import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  @Output()
onNewCharacter : EventEmitter<Character>=new EventEmitter();

  public character: Character={
    name:'',
    power: 0
  };
  public emitirCharacter(){
    if (this.onNewCharacter.name.length===0) return;

    this.onNewCharacter.emit(this.character);
    console.log(this.character);
    this.character.name='';
    this.character.power=0;
  }

}
