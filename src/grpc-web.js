// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { AuditLogClient, UserClient } from './api/domain/Queryhandler_serviceServiceClientPb';
// import { GrpcWebClientBase } from 'grpc-web';
// import { GoogleAuth } from 'google-auth-library';
// import { GetByUserRequest, GetCountRequest } from './api/domain/queryhandler_service_pb';

// // class AuthInterceptor {
// //   token: string

// //   constructor(token: string) {
// //     this.token = token
// //   }

// //   intercept(request: any, invoker: any) {
// //     const metadata = request.getMetadata()
// //     metadata.Authorization = 'Bearer ' + this.token
// //     // metadata.Authorization = this.token
// //     return invoker(request)
// //   }
// // }

// function App() {

  
//   // const channelCreds = grpc.credentials.createSsl(rootCert);
//   // const metaCallback = (_params, callback) => {
//   //     const meta = new grpc.Metadata();
//   //     meta.add('custom-auth-header', 'token');
//   //     callback(null, meta);
//   // }
//   // const callCreds = grpc.credentials.createFromMetadataGenerator(metaCallback);
//   // const combCreds = grpc.credentials.combineChannelCredentials(channelCreds, callCreds);
//   // const stub = new helloworld.Greeter('myservice.example.com', combCreds);

//   // const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {
//   // });
//   // const client = new EchoServiceClient('http://myapi.com');
//   // enableDevTools([
//   //   client,
//   // ]);

//   const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkOWZhOGE2NDk0ZDFlOTc3ZGEwODIwNTE4MTg5ODcxY2E2Y2JjMWZhNzc1ODBmZDRjM2E1ZTZlZjYzNzMzZDYiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsibThhcGkiXSwiZXhwIjoxNjc1NjIxNTYyLCJpYXQiOjE2NzU1MzUxNjIsImlzX2FwaV90b2tlbiI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9hcGkubW9ub3Nrb3BlLmRldiIsImp0aSI6IjRkYjQ5ZDA2LTE0MzctNDY4Yi05ODNjLWM0OTBmODBhNTA2ZiIsIm5hbWUiOiJhZG1pbkBtb25vc2tvcGUuZGV2IiwibmJmIjoxNjc1NTM1MTYyLCJzY29wZSI6IkFQSSIsInN1YiI6ImFkbWluQG1vbm9za29wZS5kZXYifQ.oKO3iX0jIdMEx-fNx5pyQNiHcFye62GEHZlgxNUsZPYf3aS3P4Y4nr0hWYJL0ozhS9HBt7vgFO1JZxS8ez_QOXJePRKcnJ1re8MCWK8ikuaB_kpeI49BXCkNH9-7IFs584JVEmpi_zYhjpLbQgOdneD13ZBnv_Mev9gnwCeNEQXsB1q8govUNYJ_SlGqrksPxREQ1EWpo-7TxgzGhw9IcsY8akGOui4Km81KISZEeoi_afoprrsLloEsAJaYiBo1Nd1dX4UmYtG8xIDD5Eag_cUqm8dILKvzIxp3lh6Yv222_1BlLqQIqnOSUzZ5e-TRkUpniNgl5Nei7oCWUnTy-w"
//   const authInterceptor = new AuthInterceptor(token)
//   const options = {
//     // unaryInterceptors: [authInterceptor],
//     // streamInterceptors: [authInterceptor]
//   }
//   const metadata = {
//     Authorization: 'Bearer ' + token
//   }

//   const client = new UserClient("https://api.monoskope.dev:8443", metadata, options)
//   const req = new GetCountRequest()
//   req.setIncludeDeleted(false)
  
//   console.log("=========");
//   client.getCount(req, {}, (err, response) => {
//     if (err) {
//       console.log("error");
//       console.log(err.code);
//       console.log(err.message);
//     } else {
//       console.log("success");
//       console.log(response.getCount());
//     }
//   });
//   console.log("=========");

//   // const client = new UserClient("http://localhost:8080", null, options)
//   // const req = new GetAllRequest()
//   // req.setIncludeDeleted(false)

//   // const stream = client.getAll(req, {})
//   // stream.on('data', function(response) {
//   //   console.log(response.getEmail);
//   // });
//   // stream.on('status', function(status) {
//   //   console.log(status.code);
//   //   console.log(status.details);
//   //   console.log(status.metadata);
//   // });
//   // stream.on('end', () => {
//   //   console.log("end");
//   // });
//   // stream.cancel()

//   // var stream = echoService.serverStreamingEcho(streamRequest, metadata);
//   // stream.on('data', function(response) {
//   //   console.log(response.getMessage());
//   // });
//   // stream.on('status', function(status) {
//   //   console.log(status.code);
//   //   console.log(status.details);
//   //   console.log(status.metadata);
//   // });
//   // stream.on('end', function(end) {
//   //   // stream end signal
//   // });

//   // // to close the stream
//   // stream.cancel()

//   // const client = new AuditLogClient("http://localhost:8082", null, options)
//   // const req = new GetAuditLogByDateRangeRequest()
//   // req.setMaxTimestamp()
//   // req.setMinTimestamp()

//   // const stream = client.getByDateRange(req, {})
//   // stream.on('data', function(response) {
//   //   console.log(response.getEventType());
//   // });
//   // stream.on('status', function(status) {
//   //   console.log(status.code);
//   //   console.log(status.details);
//   //   console.log(status.metadata);
//   // });
//   // stream.on('end', function(end) {
//   //   // stream end signal
//   // });
  
//   // to close the stream
//   // stream.cancel()

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
