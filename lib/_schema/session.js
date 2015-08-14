eSessions = new Mongo.Collection('eSessions');  //testing autoform

eSession = new SimpleSchema({
			evento: 	 { type: [String], 	label: "Event" , autoform: {
																	      options: function() {
																	        return _.map(Eventos.find().fetch(), function(evento) {
																	          return {
																	            label: evento.title,
																	            value: evento._id
																	          };
																	        });
																	      }
																	  }
																		},
            title:       {  type: String, 	label: "Title",   max: 200  },
            starttime:   {  type: Date,     label: "Start Time"  },
            endtime:     {  type: Date,     label: "End Time"  },
            description: {  type: String,   label: "Description"  },
            // speakers:     {type: [Profile],   label: "Speakers(email)" ,    defaultValue: [],   optional: true},
            //attendees:    {type: [Profile],   label: "Attendees",    defaultValue: [] ,  optional: true},
            //speakers:    {  type: [String],  label: "Speakers" ,  optional:true},
            //attendees:   {  type: [String],  label: "Attendees",  optional:true},
            //contents:     {type: [Content],   label: "Longitude", max: 40 ,  optional: true}
});

eSessions.attachSchema(eSession);
// ESessions.allow({
//   insert: function(userId, doc){
//         return doc && doc.userId === userId;
//       },
//   update: function(userId, doc){
//         return doc && doc.userId === userId;
//       },
//   remove:  function(userId, doc){
//         return doc && doc.userId === userId;
//       }
// });