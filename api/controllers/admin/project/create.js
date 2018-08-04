module.exports = {
    friendlyName: 'Update work info',
    description: 'Display "Edit work" page.',

    inputs: {
        startDate: {
            type: 'string',
            columnType: 'datetime',
        },
        endDate: {
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

        console.log('process create project');

        var valuesToCreate = {
            title: inputs.title,
            startDate: inputs.startDate,
            endDate: inputs.endDate
        };

        await Project.create(valuesToCreate);
        throw { redirect: '/admin/project' };
    }
};
