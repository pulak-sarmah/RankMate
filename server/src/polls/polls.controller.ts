import { Body, Controller, Logger } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { CreatePollDto } from './dtos/create-poll.dto';
import { CreateJoinPollDto } from './dtos/create-joinPoll.dto';

@Controller('polls')
export class PollsController {
  @Post()
  async create(@Body() createPollDto: CreatePollDto) {
    Logger.log('Creating a poll');

    return createPollDto;
  }

  @Post('/join')
  async join(@Body() createJoinPollDto: CreateJoinPollDto) {
    Logger.log('Joining a poll');
    return createJoinPollDto;
  }

  @Post('/rejoin')
  async rejoin() {
    Logger.log('Rejoining a poll');
  }
}
