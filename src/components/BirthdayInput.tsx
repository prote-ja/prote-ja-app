import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import InformationContainer from "@/components/InformationContainer";

const BirthdayInput: React.FC = () => {
  const [birthday, setBirthday] = useState("DD/MM/YYYY");
  const [editingBirthday, setEditingBirthday] = useState(false);

  const isValidBirthday = (date: string): boolean => {
    const birthdayRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!birthdayRegex.test(date)) return false;

    const year = parseInt(date.split("/")[2], 10);
    return year >= 1900 && year <= 2025;
  };

  const formatBirthday = (value: string) => {
    const cleanedValue = value.replace(/[^0-9]/g, "");

    let formattedValue = cleanedValue;

    if (formattedValue.length >= 3 && formattedValue.length <= 4) {
      formattedValue = `${formattedValue.substring(
        0,
        2
      )}/${formattedValue.substring(2)}`;
    } else if (formattedValue.length >= 5 && formattedValue.length <= 6) {
      formattedValue = `${formattedValue.substring(
        0,
        2
      )}/${formattedValue.substring(2, 4)}/${formattedValue.substring(4)}`;
    } else if (formattedValue.length > 6) {
      formattedValue = `${formattedValue.substring(
        0,
        2
      )}/${formattedValue.substring(2, 4)}/${formattedValue.substring(4, 8)}`;
    }

    return formattedValue;
  };

  const handleBirthdayChange = (value: string) => {
    const formatted = formatBirthday(value);
    setBirthday(formatted);
  };

  const handleEditBirthdayClick = () => setEditingBirthday(true);
  const handleSaveBirthdayClick = () => {
    if (isValidBirthday(birthday)) {
      setEditingBirthday(false);
    }
  };

  return (
    <div className="space-y-4">
      <InformationContainer
        name={
          <div className="flex items-center gap-1">
            <span>Data de Nascimento</span>
          </div>
        }
        value={
          editingBirthday ? (
            <div className="flex flex-col sm:flex-row items-center gap-1.5">
              <Input
                value={birthday}
                onChange={(e) => handleBirthdayChange(e.target.value)}
                placeholder="DD/MM/YYYY"
                className="w-64 sm:w-64"
              />
              <Button
                variant="secondary"
                onClick={handleSaveBirthdayClick}
                className="w-full sm:w-auto"
                disabled={!isValidBirthday(birthday)}
              >
                Salvar
              </Button>
              {!isValidBirthday(birthday) && (
                <span className="text-red-500 text-sm mt-2">
                  A data precisa estar no formato DD/MM/YYYY
                </span>
              )}
            </div>
          ) : (
            <Button
              variant="secondary"
              onClick={handleEditBirthdayClick}
              className="w-32 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
              title={birthday}
            >
              {birthday}
            </Button>
          )
        }
      />
    </div>
  );
};

export default BirthdayInput;
