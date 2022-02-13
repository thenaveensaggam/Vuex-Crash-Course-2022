import {EmployeeService} from "@/services/EmployeeService";

export default {
    namespaced: true,
    state: {
        employeeList: {
            employees: EmployeeService.getAllEmployees()
        }
    },
    mutations: {
        UPDATE_SELECTED: function (state, payload) {
            state.employeeList.employees = state.employeeList.employees.map(employee => {
                if (employee.id === payload.empId) {
                    return {
                        ...employee,
                        isSelected: !employee.isSelected
                    }
                } else return employee;
            });
        }
    },
    actions: {
        changeSelected: function ({commit}, payload) {
            return commit("UPDATE_SELECTED", payload);
        }
    }
}
