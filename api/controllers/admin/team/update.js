module.exports = {
    friendlyName: "Update work info",
    description: 'Display "Edit work" page.',

    inputs: {
        teamId: {
            type: "number"
        },
        name: {
            type: "string"
        }
    },

    exits: {
        success: {},
        redirect: {
            description: "The Team was updated successfully.",
            responseType: "redirect"
        }
    },
    fn: async function (inputs, exits) {
        console.log("log: update team");

        var valuesToUpdate = {
            name: inputs.name
        };

        await Team.update({ id: inputs.teamId }).set(valuesToUpdate);
        throw { redirect: "/admin/team" };
    }
};
