import { Administrator } from 'src/domain/administrator/entity/Administrator'
import { AdministratorDto } from '../AdministratorDto'

const convetToDto = (entity: Administrator) => {
  const { id, firstName, lastName, mailAddress } = entity.getAllProperties()
  return new AdministratorDto({
    id: id.value,
    firstName: firstName.value,
    lastName: lastName.value,
    mailAddress: mailAddress.value,
  })
}

export default convetToDto
