const pathSwagger = {
    auth: {
        
    "/user/get-profile":
    {get: {
       tags: ["Profiles"],
       security: [{ApiKeyAuth: []}],
       responses: {
        "200" : {
            description: "ok"
        }}
    }},    
    "/user/profile":
    {post: {
       tags: ["Profiles"],
       security: [{ApiKeyAuth: []}],
       responses: {
        "200" : {
            description: "ok"
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
                                description: "profile_name",
                                type: "string"
                            },
                            email: {
                                description: "profile_email",
                                type: "string"
                            },
                            adress: {
                                description: "profile_address",
                                type: "string"
                            },
                            phone_number: {
                                description: "profile_address",
                                type: "number"
                            },
                            avatar: {
                                 description: "profile_avatar",
                                type: "string"
                            },
                            role: {
                                description: "role",
                                type: "string"
                           },
                           certification: {
                            description: "role",
                            type: "object"
                       }
                        }
                    },
                    required: true
                }
            }
        }   
    }},
    "/user/update-profile":
    {put: {
       tags: ["Profiles"],
       security: [{ApiKeyAuth: []}],
       responses: {
        "200" : {
            description: "ok"
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
                                description: "profile_name",
                                type: "string"
                            },
                            email: {
                                description: "profile_email",
                                type: "string"
                            },
                            adress: {
                                description: "profile_address",
                                type: "string"
                            },
                            phone_number: {
                                description: "profile_address",
                                type: "number"
                            },
                            avatar: {
                                 description: "profile_avatar",
                                type: "string"
                            },
                            role: {
                                description: "role",
                                type: "string"
                           },
                           certification: {
                            description: "role",
                            type: "object"
                       }
                        }
                    },
                    required: true
                }
            }
        }   
    }},
    
    
    "/user/register":
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
"/user/login": {
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

"/user/facebook-login": {
    post: {
        tags: ["user"],
        security: [{ApiKeyAuth: []}],
        responses: {
         "200" : {
             description: "facebook_login"
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
"/admin/get-all-users": {
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
"/admin/delete-user/{id}": {
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

"/admin/update-user/{id}": {
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

"/user/save-image/{id}": {
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

"/user/unsave-image/{id}": {
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

"/user/delete-image/{id}": {
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

"/admin/register":
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
"/admin/login": {
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
    
"/image/saved-image/list": {
    get: {
        tags: ["Image"],
        security: [{ApiKeyAuth: []}],
        responses: {
         "200" : {
             description: "Get List Saved Image By User"
         }
        }
     }
},

    "/image/get-image/{id}" :
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
     "/image/list-image" :
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
},
comment: {
         "/comment/img/{id}" :
         {post: {
             tags: ["comment"],
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
          }},
          "/comment/comment-by-user" :
         {get: {
             tags: ["comment"],
             security: [{ApiKeyAuth: []}],
             responses: {
              "200" : {
                  description: "ok"
              }},
          }},
          "/comment/comment-by-image/{id}" :
          {get: {
              tags: ["comment"],
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
             ]
           }},
           "/comment/delete-comment/{id}" :
          {delete: {
              tags: ["comment"],
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
                 },
                 
             ]
           }}
    },
}
export default pathSwagger