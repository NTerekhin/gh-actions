import {Page} from "./page";
import {Panel} from "./panel";

export class Board {
    #pages: Array<Page> = null;
    #courses: Array = null;
    #height: number = 0;
    #width: number = 0;
    #page_idx: number = 0;
    #column_idx: number = 0;

    constructor(height: number, width: number, courses: Array) {
        this.#courses = courses;
        this.#pages = [];
        this.#height = height;
        this.#width = width;
    }

    get pages() {
        return this.#pages;
    }

    get totalPages(): number {
        return this.#page_idx;
    }

    initBoard() {

        if (this.#courses) {
            this.#pages.push(new Page(this.#height, this.#width))
            this.#courses.forEach((course, idx) => {
                this.initPage(new Panel(course.id, course.title), [...course.dishes])
            });
        }
    }

    initPage(panel, dishes) {
        if (this.#pages[this.#page_idx].columns.length === this.#column_idx) {
            this.#pages.push(new Page(this.#height, this.#width))
            this.#column_idx = 0;
            ++this.#page_idx;
        }

        if (this.#pages[this.#page_idx].columns[this.#column_idx].height < panel.height) {
            ++this.#column_idx;
            this.initPage(panel, dishes);
            return;
        }

        const column = this.#pages[this.#page_idx].columns[this.#column_idx];

        let split_dishes = null;
        let current_panel_height = (dishes.length * panel.dishHeight + panel.height);
        if (current_panel_height > column.height) {

            let dishes_in_current_panel = (Math.floor(((column.height - panel.height) * dishes.length) / current_panel_height));
            split_dishes = dishes.splice(0, dishes_in_current_panel);

            ++this.#column_idx;
            let sub_panel = new Panel(panel.id, panel.title)
            sub_panel.mainPanel = panel;
            panel.childPanel = sub_panel;
            this.initPage(sub_panel, dishes);
        }
        panel.addDishes(split_dishes ?? dishes);
        column.addPanel(panel);

    }

}