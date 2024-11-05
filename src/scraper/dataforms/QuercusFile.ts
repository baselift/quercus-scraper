class QuercusFile extends Dataform {
    constructor(fileLink: string, fileName: string) {
        super(fileLink, fileName);
    }

    save(): void {
        throw new Error("Method not implemented.");
    }
}