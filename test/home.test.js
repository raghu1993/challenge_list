import { createLocalVue, shallowMount } from '@vue/test-utils'
import Home from '@/pages/home'

describe('Home', () => {
    let localVue;
    let wrapper;
    beforeEach(() => {
        localVue = createLocalVue()
        wrapper = shallowMount(Home, {
            localVue,
            propsData: {}
        })
    })
    it('should sort array in descending order', () => {
        wrapper.vm.filterList("desDate", 0);
        expect(wrapper.vm.challengesList).toStrictEqual(
            [{ "title": "Title 1", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.", "tags": ["Feature", "Tech", "Information", "Task"], "votesCount": "25", "views": "37", "creationDate": "2022-09-16T18:32:50.611Z", "challengeId": "chalId1", "employeeName": "Ram K", "employeeId": "sc20Ra120", "createdBy": "self" }, { "title": "Title 3", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.", "tags": ["Feature", "Tech", "Information", "Task"], "votesCount": "29", "views": "150", "creationDate": "2022-09-15T19:15:55.611Z", "challengeId": "chalId3", "employeeName": "Lakshmi Naryan", "employeeId": "sc20La130", "createdBy": "other" }, { "title": "Title 2", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.", "tags": ["Feature", "Tech", "Information", "Task"], "votesCount": "143", "views": "224", "creationDate": "2022-09-15T14:20:14.611Z", "challengeId": "chalId2", "employeeName": "Ram K", "employeeId": "sc20Ra120", "createdBy": "self" }, { "title": "Title 5", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.", "tags": ["Feature", "Tech", "Information", "Task"], "votesCount": "12", "views": "147", "creationDate": "2022-09-15T10:33:11.611Z", "challengeId": "chalId5", "employeeName": "Alex Walton", "employeeId": "sc20Al140", "createdBy": "other" }, { "title": "Title 4", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.", "tags": ["Feature", "Tech", "Information", "Task"], "votesCount": "478", "views": "650", "creationDate": "2022-09-02T16:46:24.611Z", "challengeId": "chalId4", "employeeName": "Malini S", "employeeId": "sc20Ma135", "createdBy": "other" }]
        );
    })
    it('should sort array in ascending order', () => {
        wrapper.vm.filterList("ascDate", 1);
        expect(wrapper.vm.challengesList).toStrictEqual(
            [{ "title": "Title 4", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.", "tags": ["Feature", "Tech", "Information", "Task"], "votesCount": "478", "views": "650", "creationDate": "2022-09-02T16:46:24.611Z", "challengeId": "chalId4", "employeeName": "Malini S", "employeeId": "sc20Ma135", "createdBy": "other" }, { "title": "Title 5", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.", "tags": ["Feature", "Tech", "Information", "Task"], "votesCount": "12", "views": "147", "creationDate": "2022-09-15T10:33:11.611Z", "challengeId": "chalId5", "employeeName": "Alex Walton", "employeeId": "sc20Al140", "createdBy": "other" }, { "title": "Title 2", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.", "tags": ["Feature", "Tech", "Information", "Task"], "votesCount": "143", "views": "224", "creationDate": "2022-09-15T14:20:14.611Z", "challengeId": "chalId2", "employeeName": "Ram K", "employeeId": "sc20Ra120", "createdBy": "self" }, { "title": "Title 3", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.", "tags": ["Feature", "Tech", "Information", "Task"], "votesCount": "29", "views": "150", "creationDate": "2022-09-15T19:15:55.611Z", "challengeId": "chalId3", "employeeName": "Lakshmi Naryan", "employeeId": "sc20La130", "createdBy": "other" }, { "title": "Title 1", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.", "tags": ["Feature", "Tech", "Information", "Task"], "votesCount": "25", "views": "37", "creationDate": "2022-09-16T18:32:50.611Z", "challengeId": "chalId1", "employeeName": "Ram K", "employeeId": "sc20Ra120", "createdBy": "self" }]
        );
    })
    it('should sort array in count order', () => {
        wrapper.vm.filterList("votesCount", 2);
        expect(wrapper.vm.challengesList).toStrictEqual(
            [{ "title": "Title 4", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.", "tags": ["Feature", "Tech", "Information", "Task"], "votesCount": "478", "views": "650", "creationDate": "2022-09-02T16:46:24.611Z", "challengeId": "chalId4", "employeeName": "Malini S", "employeeId": "sc20Ma135", "createdBy": "other" }, { "title": "Title 2", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.", "tags": ["Feature", "Tech", "Information", "Task"], "votesCount": "143", "views": "224", "creationDate": "2022-09-15T14:20:14.611Z", "challengeId": "chalId2", "employeeName": "Ram K", "employeeId": "sc20Ra120", "createdBy": "self" }, { "title": "Title 3", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.", "tags": ["Feature", "Tech", "Information", "Task"], "votesCount": "29", "views": "150", "creationDate": "2022-09-15T19:15:55.611Z", "challengeId": "chalId3", "employeeName": "Lakshmi Naryan", "employeeId": "sc20La130", "createdBy": "other" }, { "title": "Title 1", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.", "tags": ["Feature", "Tech", "Information", "Task"], "votesCount": "25", "views": "37", "creationDate": "2022-09-16T18:32:50.611Z", "challengeId": "chalId1", "employeeName": "Ram K", "employeeId": "sc20Ra120", "createdBy": "self" }, { "title": "Title 5", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.", "tags": ["Feature", "Tech", "Information", "Task"], "votesCount": "12", "views": "147", "creationDate": "2022-09-15T10:33:11.611Z", "challengeId": "chalId5", "employeeName": "Alex Walton", "employeeId": "sc20Al140", "createdBy": "other" }]
        );
    })
})