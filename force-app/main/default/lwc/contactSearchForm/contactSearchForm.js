import { LightningElement, track } from 'lwc';
import searchContacts from '@salesforce/apex/ContactSearchController.searchContacts';

export default class ContactSearchForm extends LightningElement {
    @track searchKey = '';
    @track contacts;

    handleSearchKeyChange(event) {
        this.searchKey = event.target.value;
    }

    handleSearch() {
        searchContacts({ searchKey: this.searchKey })
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}