import { Injectable } from '@nestjs/common';

export interface Profile {
  id: string;
  name: string;
  description: string;
}

@Injectable()
export class ProfilesService {
  private profiles: Profile[] = [
    {
      id: crypto.randomUUID(),
      name: 'Alice',
      description: 'Software engineer from London',
    },
    {
      id: crypto.randomUUID(),
      name: 'Bob',
      description: 'Product manager based in Berlin',
    },
    {
      id: crypto.randomUUID(),
      name: 'Charlie',
      description: 'Designer living in New York',
    },
    {
      id: crypto.randomUUID(),
      name: 'Diana',
      description: 'Data scientist from Toronto',
    },
    {
      id: crypto.randomUUID(),
      name: 'Evan',
      description: 'DevOps engineer in Sydney',
    },
  ];

  findAll(): Profile[] {
    return this.profiles;
  }

  findOne(id: string): Profile | undefined {
    return this.profiles.find((profile) => profile.id === id);
  }

  create(name: string, description: string): Profile {
    const profile: Profile = {
      id: crypto.randomUUID(),
      name,
      description,
    };
    this.profiles.push(profile);
    return profile;
  }

  update(id: string, name: string, description: string): Profile | undefined {
   const index = this.profiles.findIndex((p) => p.id === id);
   if (index !== -1) {
    this.profiles[index] = {
      ...this.profiles[index],
      name,
      description,
    };
    return this.profiles[index];
   }
   return undefined;
  }

  remove(id: string): void {
    const index = this.profiles.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.profiles.splice(index, 1);
    }
  }
}

