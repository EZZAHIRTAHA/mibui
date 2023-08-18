import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Preview} from '../../../Components';
import {Input, InputGroup, InputGroupAddon} from '../../../Forms';
import {MagnifyingGlassIcon} from '@heroicons/react/20/solid';
import SvgIcon from '../../../Components/SvgIcon/SvgIcon.tsx';
import {DROPDOWN_OPTIONS} from '../../Components/Dropdown/Page.tsx';
import {SizeEnum} from '../../../Components/Button/Button.types.tsx';


const Page = () => {

  return (
    <div className="flex flex-col gap-12">
      <Preview title="Text Addons" className="flex flex-col gap-2">
        <InputGroup>
          <InputGroupAddon>https://</InputGroupAddon>
          <Input placeholder="mibtech.ma"/>
        </InputGroup>
        <InputGroup>
          <Input placeholder="username"/>
          <InputGroupAddon>@mibtech.ma</InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <Input placeholder="username"/>
          <InputGroupAddon>@</InputGroupAddon>
          <Input placeholder="mibtech.ma"/>
        </InputGroup>
      </Preview>
      <Preview title="Sizes" className="flex flex-col gap-2">
        <InputGroup>
          <InputGroupAddon>https://</InputGroupAddon>
          <Input size={SizeEnum.Small} placeholder="mibtech.ma"/>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon>https://</InputGroupAddon>
          <Input placeholder="mibtech.ma"/>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon>https://</InputGroupAddon>
          <Input size={SizeEnum.Large} placeholder="mibtech.ma"/>
        </InputGroup>
      </Preview>
      <Preview title="Icon Addons" className="flex flex-col gap-2">
        <InputGroup>
          <Input placeholder="Search..."/>
          <InputGroupAddon>
            <SvgIcon icon={MagnifyingGlassIcon}/>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon>
            <SvgIcon icon={MagnifyingGlassIcon}/>
          </InputGroupAddon>
          <Input placeholder="Search..."/>
        </InputGroup>
      </Preview>
      <Preview title="Button Addons" className="flex flex-col gap-2">
        <InputGroup>
          <Button>Action</Button>
          <Input placeholder="Search..."/>
        </InputGroup>
        <InputGroup>
          <Input placeholder="Search..."/>
          <Button>Action</Button>
          <Button>Action</Button>
        </InputGroup>
      </Preview>
      <Preview title="Button with dropdowns" className="flex flex-col gap-2">
        <InputGroup>
          <Dropdown>
            <DropdownToggle as={Button} className='rounded-none rounded-s'>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              {DROPDOWN_OPTIONS.map(({label}) => (
                <DropdownItem key={label}>
                  {label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Input placeholder="Search..."/>
        </InputGroup>
        <InputGroup>
          <Dropdown>
            <DropdownToggle as={Button} className='rounded-none rounded-s'>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              {DROPDOWN_OPTIONS.map(({label}) => (
                <DropdownItem key={label}>
                  {label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Input placeholder="Search..."/>
          <Dropdown>
            <DropdownToggle as={Button} className='rounded-none'>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              {DROPDOWN_OPTIONS.map(({label}) => (
                <DropdownItem key={label}>
                  {label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownToggle as={Button} className='rounded-none rounded-e'>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              {DROPDOWN_OPTIONS.map(({label}) => (
                <DropdownItem key={label}>
                  {label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </InputGroup>
      </Preview>
    </div>
  )
}

export default Page