import { Injectable } from '@nestjs/common';
import { CreateHistoriqueCxoGrothDto } from './dto/create-historique-cxo-groth.dto';
import { UpdateHistoriqueCxoGrothDto } from './dto/update-historique-cxo-groth.dto';

@Injectable()
export class HistoriqueCxoGrothService {
  create(createHistoriqueCxoGrothDto: CreateHistoriqueCxoGrothDto) {
    return 'This action adds a new historiqueCxoGroth';
  }

  findAll() {
    return `This action returns all historiqueCxoGroth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} historiqueCxoGroth`;
  }

  update(id: number, updateHistoriqueCxoGrothDto: UpdateHistoriqueCxoGrothDto) {
    return `This action updates a #${id} historiqueCxoGroth`;
  }

  remove(id: number) {
    return `This action removes a #${id} historiqueCxoGroth`;
  }
}
