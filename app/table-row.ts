export class PatientDetails {
    patientName: string;
    patientAge: number;
    patientGender: string;

    patientDisplay: string;

    constructor(
        patientName: string,
        patientAge: number,
        patientGender: string
    ) {
        this.patientName = patientName;
        this.patientAge = patientAge;
        this.patientGender = patientGender;
        this.patientDisplay = this.getPatientDisplay();
    }

    getPatientDisplay(): string {
        return this.patientName + "\n" + this.patientAge + ", " + this.patientGender;
    }
}

export class FileStatus {
    fileName: string;
    fileProgress: number;

    constructor(fileName: string, fileProgress: number) {
        this.fileName = fileName;
        this.fileProgress = fileProgress;
    }
}

export enum ProcessingStatus {
    Ongoing = "Ongoing",
    Pending = "Pending",
    Done = "Done"
}

export interface TableRow {
    patientID: string;
    patient: PatientDetails;
    dateOfUpload: Date;
    filesUploaded: FileStatus[];
    processingStatus: ProcessingStatus;
    resultsAvailable: boolean;
}

export class AllRows {

    public static allRows: TableRow[] = [
        
        {
            patientID: "DE-67249",
            patient: new PatientDetails("Ramlal Singh", 56, "M"),
            dateOfUpload: new Date(),
            filesUploaded: [new FileStatus("rs-fMRI", 0), new FileStatus("t1w", 0)],
            processingStatus: ProcessingStatus.Pending,
            resultsAvailable: true
        },

        {
            patientID: "DE-67249",
            patient: new PatientDetails("Ramlal Singh", 56, "M"),
            dateOfUpload: new Date(),
            filesUploaded: [new FileStatus("rs-fMRI", 100), new FileStatus("t1w", 100)],
            processingStatus: ProcessingStatus.Done,
            resultsAvailable: true
        },

        {
            patientID: "DE-67249",
            patient: new PatientDetails("Ramlal Singh", 56, "M"),
            dateOfUpload: new Date(),
            filesUploaded: [new FileStatus("rs-fMRI", 100), new FileStatus("t1w", 100)],
            processingStatus: ProcessingStatus.Ongoing,
            resultsAvailable: true
        },

        {
            patientID: "DE-67249",
            patient: new PatientDetails("Ramlal Singh", 56, "M"),
            dateOfUpload: new Date(),
            filesUploaded: [new FileStatus("rs-fMRI", 100), new FileStatus("t1w", 100)],
            processingStatus: ProcessingStatus.Done,
            resultsAvailable: true
        },

        {
            patientID: "DE-67249",
            patient: new PatientDetails("Ramlal Singh", 56, "M"),
            dateOfUpload: new Date(),
            filesUploaded: [new FileStatus("rs-fMRI", 100), new FileStatus("t1w", 100)],
            processingStatus: ProcessingStatus.Done,
            resultsAvailable: true
        },

        {
            patientID: "DE-67249",
            patient: new PatientDetails("Ramlal Singh", 56, "M"),
            dateOfUpload: new Date(),
            filesUploaded: [new FileStatus("rs-fMRI", 100), new FileStatus("t1w", 100)],
            processingStatus: ProcessingStatus.Ongoing,
            resultsAvailable: true
        },

        {
            patientID: "DE-67249",
            patient: new PatientDetails("Ramlal Singh", 56, "M"),
            dateOfUpload: new Date(),
            filesUploaded: [new FileStatus("rs-fMRI", 100), new FileStatus("t1w", 100)],
            processingStatus: ProcessingStatus.Done,
            resultsAvailable: true
        },

        {
            patientID: "DE-67249",
            patient: new PatientDetails("Ramlal Singh", 56, "M"),
            dateOfUpload: new Date(),
            filesUploaded: [new FileStatus("rs-fMRI", 100), new FileStatus("t1w", 100)],
            processingStatus: ProcessingStatus.Done,
            resultsAvailable: true
        },

        {
            patientID: "DE-67249",
            patient: new PatientDetails("Ramlal Singh", 56, "M"),
            dateOfUpload: new Date(),
            filesUploaded: [new FileStatus("rs-fMRI", 100), new FileStatus("t1w", 100)],
            processingStatus: ProcessingStatus.Ongoing,
            resultsAvailable: true
        },

        {
            patientID: "DE-67249",
            patient: new PatientDetails("Ramlal Singh", 56, "M"),
            dateOfUpload: new Date(),
            filesUploaded: [new FileStatus("rs-fMRI", 100), new FileStatus("t1w", 100)],
            processingStatus: ProcessingStatus.Done,
            resultsAvailable: true
        },

        {
            patientID: "DE-67249",
            patient: new PatientDetails("Ramlal Singh", 56, "M"),
            dateOfUpload: new Date(),
            filesUploaded: [new FileStatus("rs-fMRI", 100), new FileStatus("t1w", 100)],
            processingStatus: ProcessingStatus.Done,
            resultsAvailable: true
        },

        {
            patientID: "DE-67249",
            patient: new PatientDetails("Ramlal Singh", 56, "M"),
            dateOfUpload: new Date(),
            filesUploaded: [new FileStatus("rs-fMRI", 100), new FileStatus("t1w", 100)],
            processingStatus: ProcessingStatus.Ongoing,
            resultsAvailable: true
        },

        {
            patientID: "DE-67249",
            patient: new PatientDetails("Ramlal Singh", 56, "M"),
            dateOfUpload: new Date(),
            filesUploaded: [new FileStatus("rs-fMRI", 100), new FileStatus("t1w", 100)],
            processingStatus: ProcessingStatus.Done,
            resultsAvailable: true
        }, {
            patientID: "DE-67249",
            patient: new PatientDetails("Ramlal Singh", 56, "M"),
            dateOfUpload: new Date(),
            filesUploaded: [new FileStatus("rs-fMRI", 100), new FileStatus("t1w", 100)],
            processingStatus: ProcessingStatus.Done,
            resultsAvailable: true
        },

        {
            patientID: "DE-67249",
            patient: new PatientDetails("Ramlal Singh", 56, "M"),
            dateOfUpload: new Date(),
            filesUploaded: [new FileStatus("rs-fMRI", 100), new FileStatus("t1w", 100)],
            processingStatus: ProcessingStatus.Ongoing,
            resultsAvailable: true
        },

        {
            patientID: "DE-67249",
            patient: new PatientDetails("Ramlal Singh", 56, "M"),
            dateOfUpload: new Date(),
            filesUploaded: [new FileStatus("rs-fMRI", 100), new FileStatus("t1w", 100)],
            processingStatus: ProcessingStatus.Done,
            resultsAvailable: true
        },

        {
            patientID: "DE-67249",
            patient: new PatientDetails("Ramlal Singh", 56, "M"),
            dateOfUpload: new Date(),
            filesUploaded: [new FileStatus("rs-fMRI", 100), new FileStatus("t1w", 100)],
            processingStatus: ProcessingStatus.Done,
            resultsAvailable: true
        },

        {
            patientID: "DE-67249",
            patient: new PatientDetails("Ramlal Singh", 56, "M"),
            dateOfUpload: new Date(),
            filesUploaded: [new FileStatus("rs-fMRI", 100), new FileStatus("t1w", 100)],
            processingStatus: ProcessingStatus.Ongoing,
            resultsAvailable: true
        },

        {
            patientID: "DE-67249",
            patient: new PatientDetails("Ramlal Singh", 56, "M"),
            dateOfUpload: new Date(),
            filesUploaded: [new FileStatus("rs-fMRI", 100), new FileStatus("t1w", 100)],
            processingStatus: ProcessingStatus.Done,
            resultsAvailable: true
        }
    ]

}