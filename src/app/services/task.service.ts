import {Injectable} from "@angular/core";
import {Task} from "../models/task";

@Injectable()
export class TaskService {
    get(): Promise<any[]>{
        return Promise.resolve([
            {id: 1, text: "Task #1", start_date: "2017-04-15 00:00", duration: 3, progress: 0.6},
            {id: 2, text: "Task #2", start_date: "2017-04-18 00:00", duration: 3, progress: 0.4},
            {id: 3, text: "Task #2", start_date: "2017-04-19 00:00", duration: 3, progress: 1.0}
        ]);
    }
}