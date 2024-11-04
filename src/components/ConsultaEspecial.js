import React, { useState } from "react";
import DatePicker from "react-datepicker";
import pt from "date-fns/locale/pt";
import "react-datepicker/dist/react-datepicker.css";

import TextInput from "../components-form/TextInput";
import CustomSelect from "../components-form/CustomSelect";

import "./consulta-especial.css";
import toast from "react-hot-toast";

const ConsultaEspecial = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  const [service, setService] = useState("");
  const [veterinarian, setVeterinarian] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [sector, setSector] = useState("");
  const [time, setTime] = useState("");

  const colorArrow = "#ff7f5030";

  const optionsEscolhaAnimal = ["Cachorro", "Gato", "Peixe", "Outro"];

  const optionsServices = [
    "Banho",
    "Cirurgia",
    "Vacinação",
    "Tratamento",
    "Outro",
  ];

  const optionsVetResponsavel = [
    "Dr. João",
    "Dr. Pedro",
    "Dr. Tiago",
    "Dr. Ricardo",
  ];

  const optionSetor = ["Banho", "Cirurgia", "Vacinação", "Tratamento", "Outro"];

  const optionsTime = [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const formatDate = (date) => {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validações
    if (!selectedDate) {
      toast.error('Por favor, selecione uma data');
      return;
    }
  
    if (!name.trim()) {
      toast.error('Por favor, preencha o nome');
      return;
    }
  
    if (!animal.trim()) {
      toast.error('Por favor, informe o animal');
      return;
    }
  
    if (!service.trim()) {
      toast.error('Por favor, selecione o serviço');
      return;
    }
  
    if (!veterinarian.trim()) {
      toast.error('Por favor, selecione o veterinário');
      return;
    }
  
    if (!phone.trim()) {
      toast.error('Por favor, informe um telefone para contato');
      return;
    }
  
    if (!gender.trim()) {
      toast.error('Por favor, selecione o gênero');
      return;
    }
  
    if (!sector.trim()) {
      toast.error('Por favor, selecione o setor');
      return;
    }
  
    if (!time.trim()) {
      toast.error('Por favor, selecione o horário');
      return;
    }
  
    console.log({
      selectedDate: formatDate(selectedDate),
      name,
      animal,
      service,
      veterinarian,
      phone,
      gender,
      sector,
      time,
    });
  
    // Mostra mensagem de sucesso
    toast.success('Formulário enviado com sucesso!');
  
    setSelectedDate(null);
    setName("");
    setAnimal("");
    setService("");
    setVeterinarian("");  
    setPhone("");
    setGender("");
    setSector("");
    setTime("");  
  };

  return (
    <section className="marcar-consulta-container">
      <form onSubmit={handleSubmit}>
        <div className="wrapper-marcar-consulta">
          <div className="date-picker-container">
            <DatePicker
              id="data"
              selected={selectedDate}
              onChange={(data) => setSelectedDate(data)}
              dateFormat="dd/MM/yyyy"
              locale={pt}
              inline
              required
            />
          </div>
          <div className="input-fields-container">
            <div className="input-field">
              <TextInput
                label="Nome do Tutor"
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <TextInput
                label="Telemóvel"
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <CustomSelect
                label="Escolha o Animal"
                id="choice-animal"
                options={optionsEscolhaAnimal}
                value={animal}
                onChange={(option) => setAnimal(option)}
                iconColor={colorArrow}
                required
              />
            </div>
            <div className="input-field">
              <TextInput
                label="Sexo"
                id="sexo"
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <CustomSelect
                label="Serviço"
                id="service"
                options={optionsServices}
                value={service}
                onChange={(option) => setService(option)}
                iconColor={colorArrow}
                required
              />
            </div>
            <div className="input-field">
              <CustomSelect
                label="Setor"
                id="setor"
                options={optionSetor}
                value={sector}
                onChange={(option) => setSector(option)}
                iconColor={colorArrow}
                required
              />
            </div>
            <div className="input-field">
              <CustomSelect
                label="Veterinário Responsável"
                id="vet-responsavel"
                options={optionsVetResponsavel}
                value={veterinarian}
                onChange={(option) => setVeterinarian(option)}
                iconColor={colorArrow}
                required
              />
            </div>
            <div className="input-field">
              <CustomSelect
                label="Horário"
                id="hora"
                options={optionsTime}
                value={time}
                onChange={(option) => setTime(option)}
                iconColor={colorArrow}
                required
              />
            </div>
          </div>
        </div>
        <div className="btn-submit-container">
          <button type="submit">Marcar Consulta</button>
        </div>
      </form>
    </section>
  );
};

export default ConsultaEspecial;
