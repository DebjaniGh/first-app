import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './create-profile.dto';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  // GET /profiles/
  @Get()
  findAll() {
    return this.profilesService.findAll();
  }

  // GET /profiles/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profilesService.findOne(id);
  }
  
  // POST /profiles
  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    const {name, description} = createProfileDto;
    return this.profilesService.create(name, description);
  }

  // PUT /profiles/:id
  @Put(':id')
  update(@Param('id') id: string, @Body() createProfileDto: CreateProfileDto) {
    const {name, description} = createProfileDto;
    return this.profilesService.update(id, name, description);
  }

  // DELETE /profiles/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    this.profilesService.remove(id);
    return { message: 'Profile deleted successfully' };
  }
}
