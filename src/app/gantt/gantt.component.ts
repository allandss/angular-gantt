import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {TaskService} from "../services/task.service";
import {LinkService} from "../services/link.service";

import "dhtmlx-gantt";
import {} from "@types/dhtmlxgantt";

@Component({
  selector: 'gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.css'],
  providers: [TaskService, LinkService]
})

export class GanttComponent implements OnInit {
    @ViewChild("gantt_here") ganttContainer: ElementRef;

    constructor(private taskService: TaskService, private linkService: LinkService){}

    ngOnInit(){
        gantt.config.xml_date = "%Y-%m-%d %H:%i";

        gantt.init(this.ganttContainer.nativeElement);

        Promise.all([this.taskService.get(), this.linkService.get()])
            .then(([data, links]) => {
                gantt.parse({data, links});
            });
    }
}