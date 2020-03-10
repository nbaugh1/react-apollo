const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } = require('graphql');

const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt },  
        mission_name: { type: GraphQLString },  
        launch_year: { type: GraphQLString },  
        rocket: { type: RocketType },  
        launch_success: { type: GraphQLBoolean },  
        launch_date_local: { type: GraphQLString },  
    })
})

const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        rocket_id: { type: GraphQLString },  
        rocket_name: { type: GraphQLString },  
        rocket_type: { type: GraphQLString },   
    })
})