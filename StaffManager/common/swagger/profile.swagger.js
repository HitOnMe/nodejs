const pathSwagger = {
    auth: {
        
    "/auth/get-profile/:id":
    {get: {
       tags: ["Profiles"],
       security: [{ApiKeyAuth: []}],
       responses: {
        "200" : {
            description: "ok"
        }},
        parameters: [
            {
                name: "id",
                in: "path",
                required: true
            }
        ],    
    }},
    "/auth/user/register":
    {post: {
       tags: ["user"],
       security: [{ApiKeyAuth: []}],
       responses: {
        "200" : {
            description: "register"
       }},
        requestBody:
        {
            content: {
                "application/json": 
                {
                    schema: {
                        type: "object",
                        properties: {
                           
                            name: {
                                description: "name",
                                type: "string"
                            },
                            email: {
                                description: "email",
                                type: "string"
                            },
                            password: {
                                description: "passwords",
                                type: "string"
                            }
                        }
                    },
                    required: true
                }
            }
        }
    ,
    },
    
},
"/auth/user/login": {
    post: {
        tags: ["user"],
        security: [{ApiKeyAuth: []}],
        responses: {
         "200" : {
             description: "login"
         }
        },
        requestBody:
        {
            content: {
                "application/json": 
                {
                    schema: {
                        type: "object",
                        properties: {
                           
                            name: {
                                description: "name",
                                type: "string"
                            },
                            email: {
                                description: "email",
                                type: "string"
                            },
                            password: {
                                description: "passwords",
                                type: "string"
                            }
                           
                        }
                    },
                    required: true
                }
            }
        }
     }
},
"/auth/user": {
    get: {
        tags: ["admin"],
        security: [{ApiKeyAuth: []}],
        responses: {
         "200" : {
             description: "get all users"
         }
        }
     }
},
"/auth/user/delete/{id}": {
    delete: {
        tags: ["admin"],
        security: [{ApiKeyAuth: []}],
        parameters: [
            {
                name: 'id',
                in: 'path',
                description: 'user_id'
            }
        ],
        responses: {
         "200" : {
             description: "delete_user"
         }
        }
     }
},

"/auth/user/update/{id}": {
    put: {
        tags: ["admin"],
        security: [{ApiKeyAuth: []}],
        parameters: [
            {
                name: 'id',
                in: 'path',
                description: 'user_id'
            }
        ],
        responses: {
         "200" : {
             description: "update_user"
         }
        }
     }
},

"/auth/user/save-image/{id}": {
    post: {
        tags: ["user"],
        security: [{ApiKeyAuth: []}],
        parameters: [
            {
                name: 'id',
                in: 'path',
                description: 'image_id'
            }
        ],
        responses: {
         "200" : {
             description: "Save image By User"
         }
        }
     }
},

"/auth/user/unsave-image/{id}": {
    put: {
        tags: ["user"],
        security: [{ApiKeyAuth: []}],
        parameters: [
            {
                name: 'id',
                in: 'path',
                description: 'image_id'
            }
        ],
        responses: {
         "200" : {
             description: "Update Save image By User"
         }
        }
     }
},

"/auth/user/delete-image/{id}": {
    delete: {
        tags: ["user"],
        security: [{ApiKeyAuth: []}],
        parameters: [
            {
                name: 'id',
                in: 'path',
                description: 'image_id'
            }
        ],
        responses: {
         "200" : {
             description: "Delete Save image By User"
         }
        }
     }
},

"/saved-image/list/{id}": {
    get: {
        tags: ["Image"],
        security: [{ApiKeyAuth: []}],
        parameters: [
            {
                name: 'id',
                in: 'path',
                description: 'user_id'
            }
        ],
        responses: {
         "200" : {
             description: "Get List Saved Image By User"
         }
        }
     }
},
"/auth/admin/register":
    {post: {
       tags: ["admin"],
       security: [{ApiKeyAuth: []}],
       responses: {
        "200" : {
            description: "register"
       }},
        requestBody:
        {
            content: {
                "application/json": 
                {
                    schema: {
                        type: "object",
                        properties: {
                           
                            name: {
                                description: "name",
                                type: "string"
                            },
                            email: {
                                description: "email",
                                type: "string"
                            },
                            password: {
                                description: "passwords",
                                type: "string"
                            }
                           
                        }
                    },
                    required: true
                }
            }
        }
    ,
    },
    
},
"/auth/admin/login": {
    post: {
        tags: ["admin"],
        security: [{ApiKeyAuth: []}],
        responses: {
         "200" : {
             description: "login"
         }
        },
        requestBody:
        {
            content: {
                "application/json": 
                {
                    schema: {
                        type: "object",
                        properties: {
                           
                            name: {
                                description: "name",
                                type: "string"
                            },
                            email: {
                                description: "email",
                                type: "string"
                            },
                            password: {
                                description: "passwords",
                                type: "string"
                            }
                           
                        }
                    },
                    required: false
                }
            }
        }
     }
}
    },
image: {
    
    "/image/{id}" :
    {get: {
        tags: ["Image"],
        security: [{ApiKeyAuth: []}],
        responses: {
         "200" : {
             description: "ok"
         }},
         parameters: [
             {
                 name: "id",
                 in: "path",
                 required: true
             }
         ],    
     }},
     "/image/upload" :
     {post: {
         tags: ["Image"],
         security: [{ApiKeyAuth: []}],
         responses: {
          "200" : {
              description: "ok"
          }},
          requestBody:
          {
              content: {
                  "multipart/form-data": 
                  {
                      schema: {
                          type: "object",
                          properties: {
                        
                              file: {
                                  format: "binary",
                                  type: "string"
                              },
                              title: {
                                  description: "title",
                                  type: "string"
                              },
                            
                              description: {
                                  description: "description",
                                  type: "string"
                              }
                          }
                      },
                      required: true
                  },
              }
          } 
      }},
      "/saved-image/list" :
    {get: {
        tags: ["Image"],
        security: [{ApiKeyAuth: []}],
        responses: {
         "200" : {
             description: "ok"
         }}
     }},
     "/image/comments/{id}" :
     {post: {
         tags: ["Image"],
         security: [{ApiKeyAuth: []}],
         responses: {
          "200" : {
              description: "ok"
          }},
          parameters: [
            {
                name: "id",
                in: "path",
                description: "image_id",
                required: true
            }
        ],  
          requestBody:
          {
              content: {
                  "application/json": 
                  {
                      schema: {
                          type: "object",
                          properties: {
                        
                            content: {
                                description: "comment",
                                type: "string"
                              }
                          }
                      },
                      required: true
                  },
              }
          } 
      }}
}
}
export default pathSwagger