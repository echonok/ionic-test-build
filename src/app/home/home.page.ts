import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonList,
  IonLabel,
  IonNote,
  IonAlert,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline, closeOutline } from 'ionicons/icons';
import { FormsModule } from '@angular/forms';

interface ICourse {
  name: string;
  rating: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonInput, FormsModule, IonButton, IonIcon, IonList, IonLabel, IonNote, IonAlert],
})
export class HomePage {
  courseList: ICourse[] = [];
  courseName: string = '';
  courseRating: number = 0;
  isAlertOpen = false;
  alertButtons = ['Action'];

  constructor() {
    addIcons({ addOutline, closeOutline });
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  addExpense() {
    if (this.courseName.trim().length < 0 || this.courseRating <= 0 || this.courseRating > 5) {
      this.setOpen(true);
      return;
    }
    this.courseList.push({ name: this.courseName, rating: this.courseRating });
  }

  clearInputs() {
    this.courseName = '';
    this.courseRating = 0;
  }
}
