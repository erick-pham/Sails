module.exports = {
    friendlyName: 'Update work info',
    description: 'Display "Edit work" page.',

    inputs: {
        project_id: {
            description: 'The ID of the work',
            type: 'number'
        },

        workLoad: {
            type: 'number'
        },
        workDate: {
            type: 'string',
            columnType: 'datetime',
        },
        title: {
            type: 'string'
        }
    },

    exits: {
        success: {

        },
        redirect: {
            description: 'The requesting user is already logged in.',
            responseType: 'redirect'
        }
    },
    fn: async function (inputs, exits) {

        console.log('process create plan');

        var valuesToCreate = {
            workLoad: inputs.workLoad,
            title: inputs.title,
            project: inputs.project_id,
            owner: this.req.session.userId,
            workDate: inputs.workDate
        };

        await Plan.create(valuesToCreate);
        throw { redirect: '/plan' };
    }
};
