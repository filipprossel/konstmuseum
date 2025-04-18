import { Injectable } from '@angular/core';
import { Client, IMessage } from '@stomp/stompjs';
import SockJS from 'sockjs-client'; // ✅ this is the correct way


@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private stompClient: Client;

  constructor() {
    this.stompClient = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8080/ws'),
      reconnectDelay: 5000,
      debug: (str) => console.log(str),
    });
  }

  connect() {
    this.stompClient.onConnect = (frame) => {
      console.log('Connected: ' + frame);

      this.stompClient.subscribe('/topic/messages', (message: IMessage) => {
        console.log('Received:', message.body);
      });
    };

    this.stompClient.onStompError = (frame) => {
      console.error('Broker error:', frame);
    };

    this.stompClient.activate(); 
  }

  sendMessage(message: string) {
    this.stompClient.publish({
      destination: '/app/send',
      body: message,
    });
  }
}
