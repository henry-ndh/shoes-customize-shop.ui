import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

interface Ward {
  name: string;
}

interface District {
  name: string;
  wards: Ward[];
}

interface Province {
  name: string;
  districts: District[];
}

interface FrameworkPopoverProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  disabled: boolean;
  options: { value: string; label: string }[];
}

interface ComboBoxFilterProps {
  onFilter: (value: {
    province: string;
    district: string;
    ward: string;
  }) => void;
}

// Dữ liệu mẫu cho Tỉnh/Thành phố, Quận/Huyện, Phường/Xã
const provinces: Province[] = [
  {
    name: 'Hà Nội',
    districts: [
      {
        name: 'Quận Hoàn Kiếm',
        wards: [{ name: 'Phường Hàng Bạc' }, { name: 'Phường Hàng Đào' }]
      },
      {
        name: 'Quận Ba Đình',
        wards: [{ name: 'Phường Ngọc Hà' }, { name: 'Phường Điện Biên' }]
      }
    ]
  },
  {
    name: 'TP. Hồ Chí Minh',
    districts: [
      {
        name: 'Quận 1',
        wards: [{ name: 'Phường Bến Nghé' }, { name: 'Phường Bến Thành' }]
      },
      {
        name: 'Quận 3',
        wards: [{ name: 'Phường Võ Thị Sáu' }, { name: 'Phường 9' }]
      }
    ]
  }
];

function FrameworkPopover({
  open,
  setOpen,
  value,
  setValue,
  placeholder,
  disabled,
  options
}: FrameworkPopoverProps) {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
          disabled={disabled}
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Tìm kiếm..." />
          <CommandList>
            <CommandEmpty>Không tìm thấy dữ liệu</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={() => {
                    setValue(option.value === value ? '' : option.value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === option.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default function ComboBoxFilter({ onFilter }: ComboBoxFilterProps) {
  const [province, setProvince] = React.useState<string>('');
  const [district, setDistrict] = React.useState<string>('');
  const [ward, setWard] = React.useState<string>('');
  const [openProvince, setOpenProvince] = React.useState<boolean>(false);
  const [openDistrict, setOpenDistrict] = React.useState<boolean>(false);
  const [openWard, setOpenWard] = React.useState<boolean>(false);

  const [districtOptions, setDistrictOptions] = React.useState<
    { value: string; label: string }[]
  >([]);
  const [wardOptions, setWardOptions] = React.useState<
    { value: string; label: string }[]
  >([]);

  // Cập nhật danh sách Quận/Huyện khi chọn Tỉnh/Thành phố
  React.useEffect(() => {
    if (province) {
      const selectedProvince = provinces.find((p) => p.name === province);
      if (selectedProvince) {
        setDistrictOptions(
          selectedProvince.districts.map((d) => ({
            value: d.name,
            label: d.name
          }))
        );
      }
      // Reset lựa chọn Quận/Huyện và Phường/Xã
      setDistrict('');
      setWard('');
      setWardOptions([]);
    } else {
      setDistrictOptions([]);
      setDistrict('');
      setWardOptions([]);
      setWard('');
    }
  }, [province]);

  // Cập nhật danh sách Phường/Xã khi chọn Quận/Huyện
  React.useEffect(() => {
    if (district) {
      const selectedProvince = provinces.find((p) => p.name === province);
      const selectedDistrict = selectedProvince?.districts.find(
        (d) => d.name === district
      );
      if (selectedDistrict) {
        setWardOptions(
          selectedDistrict.wards.map((w) => ({
            value: w.name,
            label: w.name
          }))
        );
      }
      // Reset lựa chọn Phường/Xã
      setWard('');
    } else {
      setWardOptions([]);
      setWard('');
    }
  }, [district]);

  // Gọi hàm onFilter khi đã chọn đủ Tỉnh/Thành phố, Quận/Huyện, Phường/Xã
  React.useEffect(() => {
    if (province && district && ward) {
      onFilter({ province, district, ward });
    }
  }, [province, district, ward, onFilter]);

  // Danh sách Tỉnh/Thành phố
  const provinceOptions = provinces.map((p) => ({
    value: p.name,
    label: p.name
  }));

  return (
    <div className="my-4 grid w-full grid-cols-3 gap-3">
      {/* Tỉnh/Thành phố */}
      <div className="flex w-full flex-col space-y-1">
        <FrameworkPopover
          open={openProvince}
          setOpen={setOpenProvince}
          value={province}
          setValue={setProvince}
          placeholder="Tỉnh/Thành phố"
          disabled={false}
          options={provinceOptions}
        />
      </div>
      {/* Quận/Huyện */}
      <div className="flex flex-col space-y-1">
        <FrameworkPopover
          open={openDistrict}
          setOpen={setOpenDistrict}
          value={district}
          setValue={setDistrict}
          placeholder="Quận/Huyện"
          disabled={!province}
          options={districtOptions}
        />
      </div>
      {/* Phường/Xã */}
      <div className="flex flex-col space-y-1">
        <FrameworkPopover
          open={openWard}
          setOpen={setOpenWard}
          value={ward}
          setValue={setWard}
          placeholder="Phường/Xã"
          disabled={!district}
          options={wardOptions}
        />
      </div>
    </div>
  );
}
