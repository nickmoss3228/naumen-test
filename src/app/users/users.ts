import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-users',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './users.html',
  styleUrls: ['./users.scss']
})
  
export class UsersComponent {
  users = [
    { id: 1, name: 'Иван Иванов', email: 'ivan.ivanov@mail.ru', active: true },
    { id: 2, name: 'Мария Петрова', email: 'maria.petрова@yandex.ru', active: false },
    { id: 3, name: 'Алексей Сидоров', email: 'alexey.sidorov@gmail.com', active: true },
    { id: 4, name: 'Ольга Кузнецова', email: 'olga.kuznetsova@rambler.ru', active: false },
    { id: 5, name: 'Дмитрий Смирнов', email: 'dmitry.smirnov@mail.ru', active: true },
    { id: 6, name: 'Елена Васильева', email: 'elena.vasilieva@yandex.ru', active: true },
    { id: 7, name: 'Сергей Попов', email: 'sergey.popov@gmail.com', active: false },
    { id: 8, name: 'Анна Морозова', email: 'anna.morozova@outlook.com', active: true },
    { id: 9, name: 'Павел Новиков', email: 'pavel.novikov@mail.ru', active: false },
    { id: 10, name: 'Татьяна Федорова', email: 'tatiana.fedorova@yandex.ru', active: true },
    { id: 11, name: 'Николай Лебедев', email: 'nikolay.lebedev@gmail.com', active: true },
    { id: 12, name: 'Светлана Орлова', email: 'svetlana.orlova@rambler.ru', active: false },
    { id: 13, name: 'Артем Волков', email: 'artem.volkov@mail.ru', active: true },
    { id: 14, name: 'Наталья Козлова', email: 'natalya.kozlova@yandex.ru', active: false },
    { id: 15, name: 'Михаил Павлов', email: 'mikhail.pavlov@gmail.com', active: true },
    { id: 16, name: 'Екатерина Романова', email: 'ekaterina.romanova@outlook.com', active: true },
    { id: 17, name: 'Владимир Михайлов', email: 'vladimir.mikhaylov@mail.ru', active: false },
    { id: 18, name: 'Ирина Степанова', email: 'irina.stepanova@yandex.ru', active: true },
    { id: 19, name: 'Андрей Николаев', email: 'andrey.nikolaev@gmail.com', active: false },
    { id: 20, name: 'Юлия Егорова', email: 'yulia.egorova@rambler.ru', active: true },
    { id: 21, name: 'Константин Алексеев', email: 'konstantin.alekseev@mail.ru', active: true },
    { id: 22, name: 'Анастасия Дмитриева', email: 'anastasia.dmitrieva@yandex.ru', active: false },
    { id: 23, name: 'Виктор Сергеев', email: 'viktor.sergeev@gmail.com', active: true },
    { id: 24, name: 'Людмила Александрова', email: 'lyudmila.aleksandrova@outlook.com', active: false },
    { id: 25, name: 'Борис Петров', email: 'boris.petrov@mail.ru', active: true },
    { id: 26, name: 'Галина Иванова', email: 'galina.ivanova@yandex.ru', active: true },
    { id: 27, name: 'Федор Сидоров', email: 'fedor.sidorov@gmail.com', active: false },
    { id: 28, name: 'Маргарита Кузнецова', email: 'margarita.kuznetsova@rambler.ru', active: true },
    { id: 29, name: 'Кирилл Смирнов', email: 'kirill.smirnov@mail.ru', active: false },
    { id: 30, name: 'Вера Васильева', email: 'vera.vasilieva@yandex.ru', active: true },
    { id: 31, name: 'Роман Попов', email: 'roman.popov@gmail.com', active: true },
    { id: 32, name: 'Дарья Морозова', email: 'darya.morozova@outlook.com', active: false },
    { id: 33, name: 'Егор Новиков', email: 'egor.novikov@mail.ru', active: true },
    { id: 34, name: 'София Федорова', email: 'sofia.fedorova@yandex.ru', active: false },
    { id: 35, name: 'Лев Лебедев', email: 'lev.lebedev@gmail.com', active: true },
    { id: 36, name: 'Полина Орлова', email: 'polina.orlova@rambler.ru', active: true },
    { id: 37, name: 'Максим Волков', email: 'maksim.volkov@mail.ru', active: false },
    { id: 38, name: 'Алиса Козлова', email: 'alisa.kozlova@yandex.ru', active: true },
    { id: 39, name: 'Игорь Павлов', email: 'igor.pavlov@gmail.com', active: false },
    { id: 40, name: 'Ксения Романова', email: 'ksenia.romanova@outlook.com', active: true },
    { id: 41, name: 'Станислав Михайлов', email: 'stanislav.mikhaylov@mail.ru', active: true },
    { id: 42, name: 'Валентина Степанова', email: 'valentina.stepanova@yandex.ru', active: false },
    { id: 43, name: 'Георгий Николаев', email: 'georgiy.nikolaev@gmail.com', active: true },
    { id: 44, name: 'Елизавета Егорова', email: 'elizaveta.egorova@rambler.ru', active: false },
    { id: 45, name: 'Арсений Алексеев', email: 'arseniy.alekseev@mail.ru', active: true },
    { id: 46, name: 'Виктория Дмитриева', email: 'viktoriya.dmitrieva@yandex.ru', active: true },
    { id: 47, name: 'Олег Сергеев', email: 'oleg.sergeev@gmail.com', active: false },
    { id: 48, name: 'Нина Александрова', email: 'nina.aleksandrova@outlook.com', active: true },
    { id: 49, name: 'Вячеслав Петров', email: 'vyacheslav.petrov@mail.ru', active: false },
    { id: 50, name: 'Зоя Иванова', email: 'zoya.ivanova@yandex.ru', active: true }
  ];

  searchTerm = '';
  filterType = 'all';
  selectedEmail: string | null = null;

  get filteredUsers() {
    let filtered = this.users;

    // Search filter
   if (this.searchTerm) {
      filtered = filtered.filter(user => {
        const firstName = user.name.split(' ')[0]; 
        return firstName.toLowerCase().startsWith(this.searchTerm.toLowerCase());
      });
    }

    // Active/inactive filter
    if (this.filterType === 'active') {
      filtered = filtered.filter(user => user.active);
    } else if (this.filterType === 'inactive') {
      filtered = filtered.filter(user => !user.active);
    }

    return filtered;
  }

  showEmail(email: string) {
    this.selectedEmail = email;
  }
}