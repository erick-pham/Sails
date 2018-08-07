module.exports = {
    friendlyName: "Update work info",
    description: 'Display "Edit work" page.',

    inputs: {
        teamId: {
            type: "number"
        },
        name: {
            type: "string"
        },
        members: {
            type: 'json'
        },
        leaders: {
            type: 'json'
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
        console.log(inputs.members);
        var valuesToUpdate = {
            name: inputs.name
        };

        await Team.update({ id: inputs.teamId }).set(valuesToUpdate);


        // remove member of the team
        await User.update({ team: inputs.teamId }).set({ team: null });


        // update member to team
        if (inputs.members) {
            for (var i = 0; i < inputs.members.length; i++) {
                await User.update({ id: inputs.members[i] * 1 }).set({ team: inputs.teamId });
            }
        }

        // remove leader of the team
        await User.update({ manage_team: inputs.teamId }).set({ manage_team: null });


        // update leader to team
        if (inputs.leaders) {
            for (var i = 0; i < inputs.leaders.length; i++) {
                await User.update({ id: inputs.leaders[i] * 1 }).set({ manage_team: inputs.teamId,team: inputs.teamId });
            }
        }


        throw { redirect: "/admin/team" };
    }
};
