import { TaskExamineDto } from '.';

export class VisitRecordInputDto {
    scheduleDetailId: string;
    location: string;
    longitude: number;
    latitude: number;
    desc: string;
    imgPath: string;
    growerId: string;
    growerName: string;
    employeeName: string;
    employeeId: string;
    employeeImg: string;
    signTime: Date;
    examines: TaskExamineDto[] = [];
    taskType: number;
    visitName: string;
    visitDesc: string;
    taskId: string;
    get taskTypeName() {
        if (this.taskType === 1) {
            return '技术服务';
        } else if (this.taskType === 2) {
            return '生产管理';
        } else if (this.taskType === 3) {
            return '政策宣传';
        } else if (this.taskType === 4) {
            return '临时任务';
        } else if (this.taskType === 5) {
            return '面积落实';
        } else {
            return '其他';
        }
    }

    get taskDesc() {
        return `${this.visitName}(${this.taskTypeName})，${this.visitDesc}`;
    }

    get summDesc() {
        return `${this.taskDesc}已拜访${this.growerName}`;
    }
    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
    init(data?: any) {
        if (data) {
            this.scheduleDetailId = data["scheduleDetailId"];
            this.location = data["location"];
            this.signTime = data["signTime"];
            this.longitude = data["longitude"];
            this.latitude = data["latitude"];
            this.desc = data["desc"];
            this.imgPath = data["imgPath"];
            this.growerId = data["growerId"];
            this.growerName = data["growerName"];
            this.employeeName = data["employeeName"];
            this.employeeId = data["employeeId"];
            this.employeeImg = data["employeeImg"];
            this.taskType = data["taskType"];
            this.taskType = data["taskType"];
            this.visitName = data["visitName"];
            this.visitDesc = data["visitDesc"];
            this.taskId = data["taskId"];
        }
    }

    static fromJS(data: any): VisitRecordInputDto {
        let result = new VisitRecordInputDto();
        result.init(data);
        return result;
    }
    static fromJSArray(dataArray: any[]): VisitRecordInputDto[] {
        let array = [];
        dataArray.forEach(result => {
            let item = new VisitRecordInputDto();
            item.init(result);
            array.push(item);
        });
        return array;
    }
}