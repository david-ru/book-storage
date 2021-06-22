import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book.entity';
import { BookRecordsService } from 'src/app/services/book-records.service';
import { BookManagementRoutingModule } from '../../book-management-routing.module';

const MAX_STEPS = 3;

@Component({
  selector: 'dru-add-book-wizard',
  templateUrl: './add-book-wizard.component.html',
  styleUrls: ['./add-book-wizard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBookWizardComponent implements OnInit {
  newBook: Book;
  currentStep = 1;
  maxSteps = MAX_STEPS;

  constructor(
    private bookService: BookRecordsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      if (params.get('id')) {
        this.newBook = this.bookService.getAllBooks().find( (book: Book) => book.id.toString() === params.get('id') );
      } else {
        this.newBook = {
          author: '',
          title: '',
          genres: '',
          id: null,
          synopsis: '',
          image: '../../assets/images/generic-book.jfif',
          releaseDate: '',
          editable: true,
          deletable: true,
          aditionComplete: false
        }
      }
    });
  }

  ngOnInit(): void {
    this.bookService.setIsAdditionInProgress(true);
  }

  onClickNextStep() {
    this.currentStep = this.calculateNextStepNumber();
  }

  onClickPreviousStep() {
    this.currentStep = this.calculatePreviousStepNumber();
  }

  getCurrentStepName() {
    let currentStepName = '';

    switch (this.currentStep) {
      case 1:
        currentStepName = "Author and title";
        break;
      case 2:
        currentStepName = "Genres, synopsis and release date";
        break;
      case 3:
        currentStepName = "Editable and deletable";
    }
    return currentStepName;
  }

  onClickSaveAndExit() {
    this.bookService.saveNewBook(this.newBook);
    this.goToBookList();
  }

  onClickCancel() {
    this.goToBookList();
  }

  calculateNextStepNumber() {
    return this.currentStep === MAX_STEPS ? MAX_STEPS : this.currentStep + 1;
  }

  calculatePreviousStepNumber() {
    return this.currentStep === 1 ? 1 : this.currentStep - 1;
  }

  goToBookList() {
    this.bookService.setIsAdditionInProgress(false);
    this.router.navigate(['/book-management']);
  }

}
