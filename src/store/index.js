import {createStore} from 'vuex'
import counterModule from "@/store/modules/counter.module";
import employeeModule from "@/store/modules/employee.module";
import usersModule from "@/store/modules/users.module";

export default createStore({
    state: {
        counterState: counterModule.state,
        employeeState: employeeModule.state,
        usersState: usersModule.state
    },
    mutations: {},
    actions: {},
    modules: {
        counterModule,
        employeeModule,
        usersModule
    },
    getters: {
        getCounterState: function (state) {
            return state.counterState.counter;
        },
        getEmployeeState: function (state) {
            return state.employeeState.employeeList;
        },
        getUsersState: function (state) {
            return state.usersState.userList;
        }
    }
})
