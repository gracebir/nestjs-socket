import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  messages: Message[] = [{ name: 'Marius', text: 'heyooo' }];

  clientToUser = {};

  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name;
    return Object.values(this.clientToUser);
  }

  create(createMessageDto: CreateMessageDto, clientId: string) {
    const messages = {
      name: this.clientToUser[clientId],
      text: createMessageDto.text,
    };
    this.messages.push(messages); // improve
    return messages;
  }

  findAll() {
    return this.messages;
  }

  getClientByName(clientId: string) {
    return this.clientToUser[clientId];
  }
}
