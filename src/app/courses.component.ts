import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'app-courses',
    template: `
    {{ text | summary:22 }}
    `
})
export class CoursesComponent {
text = 'asnfas;nfas;fnasf;asmfamsfam[saf askbfjaksbfkajbfkjabfkafbkassbfkabfkasfkjasbfkjasbfkajsbfkajsbfkajsfbkasfbkasfkaf';
}
