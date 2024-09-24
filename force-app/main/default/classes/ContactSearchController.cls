public with sharing class ContactSearchController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> searchContacts(String searchKey) {
        String key = '%' + searchKey + '%';
        return [SELECT Id, Name, Email FROM Contact WHERE Name LIKE :key LIMIT 10];
    }
}