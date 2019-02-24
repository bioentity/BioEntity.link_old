import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http, Headers,RequestOptions, Response, ResponseOptions} from "@angular/http";
import {environment} from "../../environments/environment";
import {Lexicon} from "../lexicon/lexicon";
import {Markup} from "./markup";
import {Publication} from "../publication/publication";
import {KeyWord} from "../key-word/key-word";

@Injectable()
export class MarkupService {
  private _deleteMarkupStatus: Observable<any>;

  constructor(private http: Http) { }

    saveLink(termData: any, xmlId: string) {
        let formData: FormData = new FormData();
        formData.append('fileName', xmlId);
        formData.append('termData', JSON.stringify(termData));
        return this.http.post(environment.serverUrl + 'markup/saveLink'
            , formData)
            .map((res: Response) =>	res.json())
            .publishReplay()
            .refCount();
    }

	saveBulkLinks(termData: any, xmlId: string) {
        let formData: FormData = new FormData();
        formData.append('fileName', xmlId);
        formData.append('termData', JSON.stringify({termData}));
        return this.http.post(environment.serverUrl + 'markup/saveBulkLinks'
            , formData)
            .map((res: Response) =>	res.json())
            .publishReplay()
            .refCount();
    }


    setFinalLexicon(markup: Markup, lexicon: Lexicon) {
        let formData: FormData = new FormData();
        formData.append('markup', JSON.stringify(markup));
        formData.append('lexicon', JSON.stringify(lexicon));
        return this.http.post(environment.serverUrl + 'markup/setFinalLexicon'
            , formData)
            .map((res: Response) =>	res.json())
            .publishReplay()
            .refCount();
    }

    deleteMarkup(markup: Markup) {
        let formData: FormData = new FormData();
        formData.append('markup', JSON.stringify(markup));
        console.log('deleting markup ' + JSON.stringify(markup));
        this._deleteMarkupStatus = this.http.delete(environment.serverUrl + 'markup/delete/'+markup.id,formData)
            .map((res: Response) =>	res.json())
            .publishReplay()
            .refCount();
        return this._deleteMarkupStatus;
    }

    getMarkupsForKeyWord(keyWord: KeyWord, publication: Publication) {
        return this.http.get(environment.serverUrl + 'markup/findForKeyWords?publication='+publication.doi + '&keyWord=' + keyWord.value)
            .map((res: Response) =>	res.json())
            .publishReplay()
            .refCount();
    }

    deleteAllMarkups(markups: any) {
        let formData: FormData = new FormData();
        formData.append('markups', JSON.stringify(markups));
        console.log('deleting markup ' + JSON.stringify(markups));

        this._deleteMarkupStatus = this.http.post(environment.serverUrl + 'markup/deleteAll',formData)
            .map((res: Response) =>	res.json())
            .publishReplay()
            .refCount();
        return this._deleteMarkupStatus;
    }

    generateLink(prefix: string, externalModId: string, doi: string) {
        return 'https://identifiers.org/bioentitylink/'+ prefix + ":" + externalModId + "?doi=" + doi;
    }
}
