import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './create-profile.dto';
import { UpdateProfileDto } from './update-profile.dto';

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
  put(
    @Param('id') id: string, 
    @Body() createProfileDto: CreateProfileDto // all fields are required
  ) {
    const {name, description} = createProfileDto;
    return this.profilesService.update(id, createProfileDto);
  }

  // DELETE /profiles/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    this.profilesService.remove(id);
    return { message: 'Profile deleted successfully' };
  }

  // PATCH /profiles/:id
  @Patch(':id')
  patch(
    @Param('id') id: string, 
    @Body() updateProfileDto: UpdateProfileDto // only name or description can be updated
  ) {
    return this.profilesService.update(id, updateProfileDto);
  }  
}
